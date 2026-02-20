import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CheckoutState = {
  loading: boolean;
  success: boolean;
  error: string | null;
};

const initialState: CheckoutState = {
  loading: false,
  success: false,
  error: null,
};

const slice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    checkoutRequested(state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    checkoutSucceeded(state) {
      state.loading = false;
      state.success = true;
    },
    checkoutFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    resetCheckout(state) {
      state.success = false;
      state.error = null;
    },
  },
});

export const {
  checkoutRequested,
  checkoutSucceeded,
  checkoutFailed,
  resetCheckout,
} = slice.actions;

export default slice.reducer;
