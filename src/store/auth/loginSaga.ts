import { call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { loginRequested, loginSucceeded, loginFailed } from './authSlice';
import { container } from '../../di/container';

export function* handleLogin(action: ReturnType<typeof loginRequested>): SagaIterator {
  try {
    const { email, password } = action.payload;
    const result: { user: any; token: string } = yield call(
      [container.authService, 'login'],
      { email, password },
    );
    yield put(loginSucceeded(result));
  } catch (e: any) {
    yield put(loginFailed(e.message ?? 'Login failed'));
  }
}

export function* loginSaga(): SagaIterator {
  yield takeLatest(loginRequested.type, handleLogin);
}
