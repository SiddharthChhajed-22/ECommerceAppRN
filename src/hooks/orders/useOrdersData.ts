import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { MainStackParamList } from '../../navigation/MainNavigator';
import type { RootState } from '../../store/rootReducer';
import { fetchOrdersRequested } from '../../store/orders';

type OrdersNavProp = NativeStackNavigationProp<MainStackParamList, 'Orders'>;

export const useOrdersData = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<OrdersNavProp>();
  const { items, page, hasMore, loading, refreshing, loadingMore } =
    useSelector((state: RootState) => state.orders);
  const hasFetchedRef = useRef(false);
  const stateRef = useRef({
    loading: false,
    refreshing: false,
    itemsLength: 0,
  });

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
    if (
      !loading &&
      !loadingMore &&
      !refreshing &&
      hasMore &&
      items.length > 0
    ) {
      dispatch(fetchOrdersRequested({ page: page + 1 }));
    }
  }, [dispatch, loading, loadingMore, hasMore, page, refreshing, items.length]);

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    orders: items,
    loading,
    refreshing,
    loadingMore,
    hasMore,
    onRefresh: refresh,
    onLoadMore: loadMore,
    onBack,
  };
};
