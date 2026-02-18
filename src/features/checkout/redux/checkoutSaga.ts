import { call, put, takeLatest, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {
  checkoutRequested,
  checkoutSucceeded,
  checkoutFailed,
} from './checkoutSlice';
import { container } from '../../../core/di/container';
import { RootState } from '../../../app/store/rootReducer';
import { clearCart } from '../../cart/redux/cartSlice';
import { fetchOrdersRequested } from '../../orders/redux/ordersSlice';

function* handleCheckout(): SagaIterator {
  try {
    const cartItems: RootState['cart']['items'] = yield select((state: RootState) => state.cart.items);
    const total: number = cartItems.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);
    
    // Create order first
    yield call([container.orderService, 'createOrder'], total);
    
    // Then checkout
    yield call([container.checkoutService, 'checkout'], { items: cartItems });
    
    yield put(checkoutSucceeded());
    yield put(clearCart());
    
    // Fetch updated orders list after successful checkout (with refresh flag)
    yield put(fetchOrdersRequested({ page: 1, refresh: true }));
  } catch (e: any) {
    yield put(checkoutFailed(e.message ?? 'Checkout failed'));
  }
}

export function* checkoutSaga(): SagaIterator {
  yield takeLatest(checkoutRequested.type, handleCheckout);
}
