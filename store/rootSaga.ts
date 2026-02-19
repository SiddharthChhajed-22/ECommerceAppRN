import { all, fork } from 'redux-saga/effects';
import { authSaga } from './auth';
import { productsSaga } from './products';
import { cartSaga } from './cart';
import { checkoutSaga } from './checkout';
import { ordersSaga } from './orders';
import { profileSaga } from './profile';

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

