import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../../types/domain';

type AuthState = {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null
};

const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest(
            state,
            _action: PayloadAction<{ email: string; password: string }>,
        ) {
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action: PayloadAction<{ user: User; token: string }>) {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        loginFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        signupRequest(
            state,
            _action: PayloadAction<{ name: string; email: string; password: string }>,
        ) {
            state.loading = true;
            state.error = null;
        },
        signupSuccess(state, action: PayloadAction<{ user: User; token: string }>) {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        signupFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.user = null;
            state.token = null;
        },
    },
});

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    signupRequest,
    signupSuccess,
    signupFailure,
    logout
} = authSlice.actions

export default authSlice.reducer;