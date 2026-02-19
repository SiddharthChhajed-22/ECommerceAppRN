import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store/rootReducer';
import { fetchProductsRequested } from '../../../store/products';

export const useHomeData = () => {
  const dispatch = useDispatch();
  const { items, page, hasMore, loading, refreshing, loadingMore } =
    useSelector((state: RootState) => state.products);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    if (items.length === 0 && !loading && !refreshing) {
      dispatch(fetchProductsRequested({ page: 1 }));
    }
  }, [dispatch]);

  const refresh = useCallback(() => {
    if (!loading) {
      dispatch(fetchProductsRequested({ page: 1, refresh: true }));
    }
  }, [dispatch, loading]);

  const loadMore = useCallback(() => {
    if (!loading && !loadingMore && !refreshing && hasMore) {
      dispatch(fetchProductsRequested({ page: page + 1 }));
    }
  }, [dispatch, loading, loadingMore, hasMore, page, refreshing]);

  return {
    products: items,
    loading,
    refreshing,
    loadingMore,
    hasMore,
    refresh,
    loadMore,
    cartItemCount: cartItems.length,
  };
};
