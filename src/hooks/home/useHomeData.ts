import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { MainStackParamList } from '../../navigation/MainNavigator';
import type { RootState } from '../../store/rootReducer';
import { fetchProductsRequested } from '../../store/products';
import { useCartData } from '../cart';

type HomeNavProp = NativeStackNavigationProp<MainStackParamList, 'Home'>;

export const useHomeData = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<HomeNavProp>();
  const { items, page, hasMore, loading, refreshing, loadingMore } =
    useSelector((state: RootState) => state.products);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { addToCart } = useCartData();
  const loadingRef = useRef(false);

  useEffect(() => {
    if (items.length === 0 && !loading && !refreshing) {
      dispatch(fetchProductsRequested({ page: 1 }));
    }
  }, [dispatch, items.length, loading, refreshing]);

  useEffect(() => {
    if (!loadingMore) {
      loadingRef.current = false;
    }
  }, [loadingMore]);

  const refresh = useCallback(() => {
    if (!loading) {
      dispatch(fetchProductsRequested({ page: 1, refresh: true }));
    }
  }, [dispatch, loading]);

  const loadMore = useCallback(() => {
    if (loadingRef.current || loading || loadingMore || refreshing || !hasMore) {
      return;
    }
    if (items.length > 0 && hasMore) {
      loadingRef.current = true;
      dispatch(fetchProductsRequested({ page: page + 1 }));
      setTimeout(() => {
        loadingRef.current = false;
      }, 1500);
    }
  }, [dispatch, loading, loadingMore, hasMore, page, refreshing, items.length]);

  const onNavPress = useCallback(
    (screen: string) => {
      const route = screen as keyof MainStackParamList;
      if (navigation && route) {
        try {
          navigation.navigate(route);
        } catch (e) {
          console.warn('Navigation error:', e);
        }
      }
    },
    [navigation],
  );

  const onCartPress = useCallback(() => {
    try {
      navigation.navigate('Cart');
    } catch (e) {
      console.warn('Navigation error:', e);
    }
  }, [navigation]);

  return {
    products: items,
    loading,
    refreshing,
    loadingMore,
    hasMore,
    onRefresh: refresh,
    onLoadMore: loadMore,
    onAddToCart: addToCart,
    onNavPress,
    onCartPress,
    cartItemCount: cartItems.length,
  };
};
