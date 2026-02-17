import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../types/domain';

type ProductsState = {
    list: Product[];
    page: number;
    hasMore: boolean;
    loading: boolean;
    refreshing: boolean;
    error: string | null;
};

const initialState: ProductsState = {
    list: [],
    page: 1,
    hasMore: true,
    loading: false,
    refreshing: false,
    error: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProductsRequest(state,
            _action: PayloadAction<{ refresh: boolean } | undefined>,
        ) {
            const refresh = _action.payload?.refresh;
            state.error = null;
            if (refresh) {
                state.refreshing = true;
                state.page = 1;
            } else {
                state.loading = true;
            }
        },
        fetchProductsSuccess(state,
            action: PayloadAction<{ items: Product[]; hasMore: boolean; refresh: boolean }>,
        ) {
            const { items, hasMore, refresh } = action.payload;
            state.loading = false;
            state.refreshing = false;
            state.hasMore = hasMore;
            if (refresh) {
                state.list = items;
                state.page = 2;
            } else {
                state.list = [...state.list, ...items];
                state.page += 1;
            }
        },
        fetchProductsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.refreshing = false;
            state.error = action.payload;
        },
    },
});

export const { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } =
    productsSlice.actions;

export default productsSlice.reducer;

