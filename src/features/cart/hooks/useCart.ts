import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store/rootReducer';
import { addItem, clearCart } from '../redux/cartSlice';

export const useCart = () => {
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

  const total = useMemo(
    () =>
      items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );

  return useMemo(
    () => ({
      items,
      addToCart,
      emptyCart,
      total,
    }),
    [items, addToCart, emptyCart, total],
  );
};

