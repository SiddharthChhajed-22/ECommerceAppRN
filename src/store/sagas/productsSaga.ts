import { takeLatest, call, put, select } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } from "../slices/productsSlice";
import { fetchProductsApi } from "../../api/api";
import type { RootState } from "../store";

const selectPage = (state: RootState) => state.products.page;

function* handleFetchProducts(
    action: PayloadAction<{ refresh: boolean } | undefined>,
) {
    const refresh = action.payload?.refresh;
    try {
        const page: number = refresh ? 1 : yield select(selectPage);
        const response: { items: any[]; hasMore: boolean } =
            yield call(
                fetchProductsApi, page,
            );
        yield put(fetchProductsSuccess({
            ...response,
            refresh: !!refresh,
        }),);
    } catch (e: any) {
        yield put(fetchProductsFailure(e?.message || 'Failed to load products'));
    }
}

export default function* productsSaga() {
    yield takeLatest(fetchProductsRequest.type, handleFetchProducts);
}

