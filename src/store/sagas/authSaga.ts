import { takeLatest, call, put } from 'redux-saga/effects';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  signupRequest,
  signupSuccess,
  signupFailure,
} from '../slices/authSlice';
import { fetchProductsRequest } from '../slices/productsSlice';
import { loginApi, signupApi } from '../../api/api';


function* handleLogin(
  action: PayloadAction<{ email: string; password: string }>,
) {
  try {
    const { email, password } = action.payload;
    const response: { token: string; user: any } = yield call(loginApi, {
      email,
      password,
    });
    yield put(loginSuccess(response));
    yield put(fetchProductsRequest({ refresh: true }));
  } catch (e: any) {
    yield put(loginFailure(e?.message || 'Login failed'));
  }
}

function* handleSignup(
  action: PayloadAction<{ name: string; email: string; password: string }>,
) {
  try {
    const { name, email, password } = action.payload;
    const response: { token: string; user: any } = yield call(signupApi, {
      name,
      email,
      password,
    });
    yield put(signupSuccess(response));
    yield put(fetchProductsRequest({ refresh: true }));
  } catch (e: any) {
    yield put(signupFailure(e?.message || 'Signup failed'));
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
  yield takeLatest(signupRequest.type, handleSignup);
}

