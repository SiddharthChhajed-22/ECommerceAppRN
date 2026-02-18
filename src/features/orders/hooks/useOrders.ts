import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { RootState } from '../../../app/store/rootReducer';
import { fetchOrdersRequested } from '../redux/ordersSlice';

export const useOrders = () => {
  const dispatch = useDispatch();
  const { items, page, hasMore, loading, refreshing, loadingMore } = useSelector(
    (state: RootState) => state.orders,
  );
  const hasFetchedRef = useRef(false);
  const stateRef = useRef({ loading, refreshing, itemsLength: items.length });

  // Keep state ref updated to avoid stale closures in useFocusEffect
  useEffect(() => {
    stateRef.current = { loading, refreshing, itemsLength: items.length };
  }, [loading, refreshing, items.length]);

  // Use useFocusEffect to fetch when screen is focused
  useFocusEffect(
    useCallback(() => {
      const currentState = stateRef.current;

      // Initial fetch: always fetch on first focus if no items exist
      // This ensures data loads immediately when navigating to Orders screen
      if (!hasFetchedRef.current && currentState.itemsLength === 0) {
        hasFetchedRef.current = true;
        dispatch(fetchOrdersRequested({ page: 1 } as any));
        return;
      }

      // Refetch when screen comes into focus if items already exist (to get latest orders)
      // This ensures new orders appear automatically when navigating back to Orders screen
      // Only refetch if not currently loading/refreshing to avoid duplicate requests
      if (
        hasFetchedRef.current &&
        currentState.itemsLength > 0 &&
        !currentState.loading &&
        !currentState.refreshing
      ) {
        dispatch(fetchOrdersRequested({ page: 1, refresh: true } as any));
      }

      // Reset ref when screen loses focus so we can refetch on next focus
      return () => {
        // Reset to allow refetch on next focus (ensures latest orders are shown)
        hasFetchedRef.current = false;
      };
    }, [dispatch, hasFetchedRef, stateRef]),
  );

  const refresh = useCallback(() => {
    // Allow refresh whenever not currently loading; reducers will reset flags
    if (!loading) {
      dispatch(fetchOrdersRequested({ page: 1, refresh: true } as any));
    }
  }, [dispatch, loading]);

  const loadMore = useCallback(() => {
    // Only load more if not already loading and has more items
    if (!loading && !loadingMore && !refreshing && hasMore && items.length > 0) {
      dispatch(fetchOrdersRequested({ page: page + 1 } as any));
    }
  }, [dispatch, loading, loadingMore, hasMore, page, refreshing, items.length]);

  return useMemo(
    () => ({
      orders: items,
      loading,
      refreshing,
      loadingMore,
      hasMore,
      error: null,
      refresh,
      loadMore,
    }),
    [items, loading, refreshing, loadingMore, hasMore, refresh, loadMore],
  );
};
