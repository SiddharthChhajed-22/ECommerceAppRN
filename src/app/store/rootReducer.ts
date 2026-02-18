import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../../features/auth/redux/authSlice';
import productsReducer from '../../features/home/redux/productsSlice';
import cartReducer from '../../features/cart/redux/cartSlice';
import checkoutReducer from '../../features/checkout/redux/checkoutSlice';
import ordersReducer from '../../features/orders/redux/ordersSlice';
import profileReducer from '../../features/profile/redux/profileSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  orders: ordersReducer,
  profile: profileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

