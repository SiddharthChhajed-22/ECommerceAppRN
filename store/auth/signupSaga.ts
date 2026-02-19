import { call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { signupRequested, loginSucceeded, loginFailed } from './authSlice';
import { container } from '../../src/di/container';

export function* handleSignup(action: ReturnType<typeof signupRequested>): SagaIterator {
  try {
    const { name, email, password } = action.payload;
    const result: { user: any; token: string } = yield call(
      [container.authService, 'signup'],
      { name, email, password },
    );
    yield put(loginSucceeded(result));
  } catch (e: any) {
    yield put(loginFailed(e.message ?? 'Signup failed'));
  }
}

export function* signupSaga(): SagaIterator {
  yield takeLatest(signupRequested.type, handleSignup);
}
