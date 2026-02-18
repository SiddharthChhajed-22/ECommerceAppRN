import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store/rootReducer';
import { fetchProductsRequested } from '../redux/productsSlice';

export const useProducts = () => {
  const dispatch = useDispatch();
  const { items, page, hasMore, loading, refreshing, loadingMore } = useSelector(
    (state: RootState) => state.products,
  );

  useEffect(() => {
    // Only fetch on initial mount if no items
    if (items.length === 0 && !loading && !refreshing) {
      dispatch(fetchProductsRequested({ page: 1 }));
    }
  }, [dispatch]);

  const refresh = useCallback(() => {
    // Always allow a refresh when not already performing the initial load
    if (!loading) {
      dispatch(fetchProductsRequested({ page: 1, refresh: true }));
    }
  }, [dispatch, loading]);

  const loadMore = useCallback(() => {
    // Load more if not already loading and has more items
    if (!loading && !loadingMore && !refreshing && hasMore) {
      dispatch(fetchProductsRequested({ page: page + 1 }));
    }
  }, [dispatch, loading, loadingMore, hasMore, page, refreshing]);

  return useMemo(
    () => ({
      products: items,
      loading,
      refreshing,
      loadingMore,
      hasMore,
      refresh,
      loadMore,
    }),
    [items, loading, refreshing, loadingMore, hasMore, refresh, loadMore],
  );
};
