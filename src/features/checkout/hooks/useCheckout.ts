import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store/rootReducer';
import { checkoutRequested, resetCheckout } from '../redux/checkoutSlice';

export const useCheckout = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(
    (state: RootState) => state.checkout,
  );

  const checkout = useCallback(() => {
    dispatch(checkoutRequested());
  }, [dispatch]);

  const reset = useCallback(() => {
    dispatch(resetCheckout());
  }, [dispatch]);

  return useMemo(
    () => ({
      loading,
      success,
      error,
      checkout,
      reset,
    }),
    [loading, success, error, checkout, reset],
  );
};

