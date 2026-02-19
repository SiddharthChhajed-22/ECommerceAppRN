import { all, fork } from 'redux-saga/effects';
import { loginSaga } from './loginSaga';
import { signupSaga } from './signupSaga';

export function* authSaga() {
  yield all([fork(loginSaga), fork(signupSaga)]);
}
