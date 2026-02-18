import { all, fork } from 'redux-saga/effects';
import { authSaga } from '../../features/auth/redux/authSaga';
import { productsSaga } from '../../features/home/redux/productsSaga';
import { cartSaga } from '../../features/cart/redux/cartSaga';
import { checkoutSaga } from '../../features/checkout/redux/checkoutSaga';
import { ordersSaga } from '../../features/orders/redux/ordersSaga';
import { profileSaga } from '../../features/profile/redux/profileSaga';

export function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(productsSaga),
    fork(cartSaga),
    fork(checkoutSaga),
    fork(ordersSaga),
    fork(profileSaga),
  ]);
}

