import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../../ui/molecules/ProductCard';

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
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, addItemDirect, clearCart } = slice.actions;
export default slice.reducer;

