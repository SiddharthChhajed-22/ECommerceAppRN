import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type User = {
  id: string;
  name: string;
  email: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequested(state, _action: PayloadAction<{ email: string; password: string }>) {
      state.loading = true;
      state.error = null;
    },
    loginSucceeded(state, action: PayloadAction<{ user: User; token: string }>) {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    signupRequested(state, _action: PayloadAction<{ name: string; email: string; password: string }>) {
      state.loading = true;
      state.error = null;
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const {
  loginRequested,
  loginSucceeded,
  loginFailed,
  signupRequested,
  logout,
} = slice.actions;

export default slice.reducer;

