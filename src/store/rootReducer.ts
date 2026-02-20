import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { productsReducer } from './products';
import { cartReducer } from './cart';
import { checkoutReducer } from './checkout';
import { ordersReducer } from './orders';
import { profileReducer } from './profile';

export const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  orders: ordersReducer,
  profile: profileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

