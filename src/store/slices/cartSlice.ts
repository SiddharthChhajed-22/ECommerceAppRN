import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartItem, Product } from '../../types/domain';

type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) {
            const product = action.payload;
            const existing = state.items.find(i => i.product.id === product.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ product, quantity: 1 });
            }
        },
        removeFromCart(state, action: PayloadAction<string>) {
            const id = action.payload;
            state.items = state.items.filter(i => i.product.id !== id);
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;