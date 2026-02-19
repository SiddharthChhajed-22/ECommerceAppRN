import React from 'react';
import { View } from 'react-native';
import { MainTemplate } from '../MainTemplate';
import { NavigationHeader } from '../../molecules/NavigationHeader';
import { BottomNavBar } from '../../molecules/BottomNavBar';
import { ProductList } from '../../organisms/ProductList';
import { CartIcon } from '../../atoms/CartIcon';
import { Loader } from '../../atoms/Loader';
import { AppText } from '../../atoms/AppText';
import { homeTemplateStyles } from './styles';
import type { HomeTemplateProps } from './types';

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  products,
  loading,
  refreshing,
  loadingMore,
  hasMore,
  onRefresh,
  onLoadMore,
  onAddToCart,
  onNavPress,
  onCartPress,
  cartItemCount,
}) => {
  const header = (
    <NavigationHeader
      title="Home"
      rightComponent={
        <CartIcon onPress={onCartPress} itemCount={cartItemCount} />
      }
    />
  );

  const content =
    loading && !refreshing && products.length === 0 ? (
      <View style={homeTemplateStyles.container}>
        <Loader />
      </View>
    ) : products.length === 0 ? (
      <View style={homeTemplateStyles.emptyContainer}>
        <AppText variant="subheading" style={homeTemplateStyles.emptyText}>
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
        onRefresh={onRefresh}
        onEndReached={onLoadMore}
        onAddToCart={onAddToCart}
      />
    );

  const footer = (
    <BottomNavBar
      items={[
        { label: 'Profile', screen: 'Profile', icon: '👤' },
        { label: 'Orders', screen: 'Orders', icon: '📦' },
      ]}
      onNavPress={onNavPress}
    />
  );

  return (
    <MainTemplate header={header} content={content} footer={footer} />
  );
};
