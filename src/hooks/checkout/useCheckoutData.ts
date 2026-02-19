import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store/rootReducer';
import { checkoutRequested, resetCheckout } from '../../../store/checkout';

export const useCheckoutData = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(
    (state: RootState) => state.checkout,
  );
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const checkout = useCallback(() => {
    dispatch(checkoutRequested());
  }, [dispatch]);

  const reset = useCallback(() => {
    dispatch(resetCheckout());
  }, [dispatch]);

  return {
    loading,
    success,
    error,
    checkout,
    reset,
    cartItems,
    total,
  };
};
