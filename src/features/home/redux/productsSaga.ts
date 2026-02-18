import { call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {
  fetchProductsRequested,
  fetchProductsSucceeded,
  fetchProductsFailed,
} from './productsSlice';
import { container } from '../../../core/di/container';
import { HARD_CODED } from '../../../core/config/constants';

export function* handleFetchProducts(
  action: ReturnType<typeof fetchProductsRequested>,
): SagaIterator {
  try {
    const { page } = action.payload;
    const pageSize = HARD_CODED.defaultPageSize;
    const result: { items: any[]; hasMore: boolean } = yield call(
      [container.productService, 'getProducts'],
      { page, pageSize },
    );
    yield put(
      fetchProductsSucceeded({
        items: result.items,
        page,
        hasMore: result.hasMore,
      }),
    );
  } catch (e: any) {
    yield put(fetchProductsFailed(e.message ?? 'Failed to load products'));
  }
}

export function* productsSaga(): SagaIterator {
  yield takeLatest(fetchProductsRequested.type, handleFetchProducts);
}
