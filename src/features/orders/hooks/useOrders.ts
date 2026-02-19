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

  useEffect(() => {
    stateRef.current = { loading, refreshing, itemsLength: items.length };
  }, [loading, refreshing, items.length]);

  useFocusEffect(
    useCallback(() => {
      const currentState = stateRef.current;
      if (!hasFetchedRef.current && currentState.itemsLength === 0) {
        hasFetchedRef.current = true;
        dispatch(fetchOrdersRequested({ page: 1 }));
        return;
      }
      if (
        hasFetchedRef.current &&
        currentState.itemsLength > 0 &&
        !currentState.loading &&
        !currentState.refreshing
      ) {
        dispatch(fetchOrdersRequested({ page: 1, refresh: true }));
      }
      return () => {
        hasFetchedRef.current = false;
      };
    }, [dispatch, hasFetchedRef, stateRef]),
  );

  const refresh = useCallback(() => {
    if (!loading) {
      dispatch(fetchOrdersRequested({ page: 1, refresh: true }));
    }
  }, [dispatch, loading]);

  const loadMore = useCallback(() => {
    if (!loading && !loadingMore && !refreshing && hasMore && items.length > 0) {
      dispatch(fetchOrdersRequested({ page: page + 1 }));
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
