import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../../types/domain';
import { act } from 'react';

type OrderState = {
    list: Order[];
    loading: boolean;
    error: string | null;
};

const initialState: OrderState = {
    list: [],
    loading: false,
    error: null,
};

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        fetchOrdersRequest(state) {
            state.loading = true;
            state.error = null;
        },
        fetchOrdersSuccess(state, action: PayloadAction<Order[]>) {
            state.loading = false;
            state.list = action.payload;
        },
        fetchOrdersFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        createOrderRequest(state) {
            state.loading = true;
            state.error = null;
        },
        createOrderSuccess(state, actions: PayloadAction<Order>) {
            state.loading = false;
            state.list = [actions.payload, ...state.list];
        },
        createOrderFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchOrdersFailure,
    fetchOrdersRequest,
    fetchOrdersSuccess,
    createOrderRequest,
    createOrderSuccess,
    createOrderFailure
} = orderSlice.actions;

export default orderSlice.reducer;