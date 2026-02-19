import { call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {
  fetchOrdersRequested,
  fetchOrdersSucceeded,
  fetchOrdersFailed,
} from './ordersSlice';
import { container } from '../../src/di/container';
import { HARD_CODED } from '../../src/api/config/constants';

function* handleFetchOrders(
  action: ReturnType<typeof fetchOrdersRequested>,
): SagaIterator {
  try {
    const payload = action.payload ?? {};
    const page = payload.page ?? 1;
    const pageSize = HARD_CODED.defaultPageSize;
    const result: { items: any[]; hasMore: boolean } = yield call(
      [container.orderService, 'getOrders'],
      { page, pageSize },
    );
    yield put(
      fetchOrdersSucceeded({
        items: result.items,
        page,
        hasMore: result.hasMore,
      }),
    );
  } catch (e: any) {
    yield put(fetchOrdersFailed(e.message ?? 'Failed to load orders'));
  }
}

export function* ordersSaga(): SagaIterator {
  yield takeLatest(fetchOrdersRequested.type, handleFetchOrders);
}
