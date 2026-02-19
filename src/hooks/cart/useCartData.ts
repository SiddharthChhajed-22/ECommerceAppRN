import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store/rootReducer';
import { addItem, clearCart } from '../../../store/cart';

export const useCartData = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const addToCart = useCallback(
    (productId: string) => {
      dispatch(addItem(productId));
    },
    [dispatch],
  );

  const emptyCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return { items, addToCart, emptyCart, total };
};
