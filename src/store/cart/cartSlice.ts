import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../components/molecules/ProductCard/types';

export type CartItem = Product & { quantity: number };

type CartState = {
  items: CartItem[];
};

const initialState: CartState = { items: [] };

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, _action: PayloadAction<Product['id']>) {},
    addItemDirect(state, action: PayloadAction<Product>) {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    clearCart(state) {
      state.items = [];
    },
    removeItem(state, action: PayloadAction<Product['id']>) {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
    },
  },
});

export const { addItem, addItemDirect, clearCart, removeItem } = slice.actions;
export default slice.reducer;
