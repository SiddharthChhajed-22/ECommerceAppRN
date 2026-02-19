import React, { useCallback } from 'react';
import { HomeTemplate } from '../../components/templates/HomeTemplate';
import { useHomeData } from '../../hooks/home';
import { useCartData } from '../../hooks/cart';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { MainStackParamList } from '../../navigation/MainNavigator';

type HomeNavProp = NativeStackNavigationProp<MainStackParamList, 'Home'>;

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeNavProp>();
  const {
    products,
    loading,
    refreshing,
    loadingMore,
    hasMore,
    refresh,
    loadMore,
    cartItemCount,
  } = useHomeData();
  const { addToCart, items: cartItems } = useCartData();

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

  return (
    <HomeTemplate
      products={products}
      loading={loading}
      refreshing={refreshing}
      loadingMore={loadingMore}
      hasMore={hasMore}
      onRefresh={refresh}
      onLoadMore={loadMore}
      onAddToCart={addToCart}
      onNavPress={onNavPress}
      onCartPress={onCartPress}
      cartItemCount={cartItemCount}
    />
  );
};
