import React, { useCallback } from 'react';
import { View } from 'react-native';
import { MainTemplate } from '../../../ui/templates/MainTemplate';
import { NavigationHeader } from '../../../ui/molecules/NavigationHeader';
import { BottomNavBar } from '../../../ui/molecules/BottomNavBar';
import { ProductList } from '../../../ui/organisms/ProductList';
import { CartIcon } from '../../../ui/atoms/CartIcon';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../../cart/hooks/useCart';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../../app/navigation/MainNavigator';
import { Loader } from '../../../ui/atoms/Loader';
import { AppText } from '../../../ui/atoms/AppText';
import { homeStyles } from '../styles/homeStyles';

type HomeNavProp = NativeStackNavigationProp<MainStackParamList, 'Home'>;

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeNavProp>();
  const { products, loading, refreshing, loadingMore, hasMore, refresh, loadMore } = useProducts();
  const { addToCart, items } = useCart();

  const handleNavPress = useCallback(
    (screen: string) => {
      const route = screen as keyof MainStackParamList;
      // Ensure navigation is ready and route exists
      if (navigation && route) {
        try {
          navigation.navigate(route);
        } catch (error) {
          console.warn('Navigation error:', error);
        }
      }
    },
    [navigation],
  );

  const handleCartPress = useCallback(() => {
    try {
      navigation.navigate('Cart');
    } catch (error) {
      console.warn('Navigation error:', error);
    }
  }, [navigation]);

  const header = (
    <NavigationHeader
      title="Home"
      rightComponent={<CartIcon onPress={handleCartPress} itemCount={items.length} />}
    />
  );

  const content =
    loading && !refreshing && products.length === 0 ? (
      <View style={homeStyles.container}>
        <Loader />
      </View>
    ) : products.length === 0 ? (
      <View style={homeStyles.emptyContainer}>
        <AppText variant="subheading" style={homeStyles.emptyText}>
          No products available
        </AppText>
      </View>
    ) : (
      <ProductList
        products={products}
        loading={loading}
        refreshing={refreshing}
        loadingMore={loadingMore}
        hasMore={hasMore}
        onRefresh={refresh}
        onEndReached={loadMore}
        onAddToCart={addToCart}
      />
    );

  const footer = (
    <BottomNavBar
      items={[
        { label: 'Profile', screen: 'Profile', icon: '👤' },
        { label: 'Orders', screen: 'Orders', icon: '📦' },
      ]}
      onNavPress={handleNavPress}
    />
  );

  return <MainTemplate header={header} content={content} footer={footer} />;
};
