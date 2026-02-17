import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSaga";
import productsReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';
import orderReducer from './slices/orderSlice';


const sagaMiddleware = createSagaMiddleware();


export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    orders: orderReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      sagaMiddleware,
    ),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
