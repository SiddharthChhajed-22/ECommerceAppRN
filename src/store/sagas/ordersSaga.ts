import { takeLatest, call, put, select } from "redux-saga/effects";
import {
    fetchOrdersRequest,
    fetchOrdersSuccess,
    fetchOrdersFailure,
    createOrderRequest,
    createOrderSuccess,
    createOrderFailure
} from "../slices/orderSlice";
import { createOrderApi, fetchOrdersApi } from '../../api/api';
import { clearCart } from "../slices/cartSlice";
import type { RootState } from "../store";
import type { CartItem, Order } from '../../types/domain';

const selectCartItems = (state: RootState) => state.cart.items;

function* handleFetchOrders() {
    try {
        const orders: Order[] = yield call(fetchOrdersApi);
        yield put(fetchOrdersSuccess(orders));
    } catch (e: any) {
        yield put(fetchOrdersFailure(e?.message || 'Failed to load orders'));
    }
}

function* handleCreateOrder() {
    try {
        const cartItems: CartItem[] = yield select(selectCartItems);
        const total = cartItems.reduce((sum, item) => sum + item.quantity * parseFloat(item.product.price),
            0,
        );
        const order: Order = yield call(createOrderApi, { cartItems, total });
        yield put(createOrderSuccess(order));
        yield put(clearCart());
    } catch (e: any) {
        yield put(createOrderFailure(e?.message || 'Failed to create order'));
    }
}

export default function* ordersSaga() {
    yield takeLatest(fetchOrdersRequest.type, handleFetchOrders);
    yield takeLatest(createOrderRequest.type, handleCreateOrder);
}