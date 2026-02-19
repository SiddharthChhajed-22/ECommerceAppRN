import React, { memo, useCallback, useRef, useEffect } from 'react';
import { FlatList, ListRenderItem, RefreshControl, View, ActivityIndicator } from 'react-native';
import { ProductCard, Product } from '../../molecules/ProductCard';
import { colors } from '../../../theme/colors';
import { productListStyles } from './styles';
import type { ProductListProps } from './types';

const ProductListComponent: React.FC<ProductListProps> = ({
  products,
  loading,
  refreshing,
  loadingMore,
  hasMore,
  onRefresh,
  onEndReached,
  onAddToCart,
}) => {
  const loadingRef = useRef(false);

  useEffect(() => {
    if (!loadingMore) {
      loadingRef.current = false;
    }
  }, [loadingMore]);

  const renderItem: ListRenderItem<Product> = useCallback(
    ({ item }) => <ProductCard product={item} onAddToCart={onAddToCart} />,
    [onAddToCart],
  );

  const keyExtractor = useCallback((item: Product) => item.id, []);

  const renderFooter = useCallback(() => {
    if (!hasMore || products.length === 0) return null;
    return (
      <View style={productListStyles.footer}>
        {loadingMore ? (
          <ActivityIndicator size="small" color={colors.primary} />
        ) : (
          <View style={productListStyles.footerPlaceholder} />
        )}
      </View>
    );
  }, [loadingMore, hasMore, products.length]);

  const handleEndReached = useCallback(() => {
    if (loadingRef.current || loading || loadingMore || refreshing || !hasMore) {
      return;
    }

    if (products.length > 0 && hasMore) {
      loadingRef.current = true;
      onEndReached();
      setTimeout(() => {
        loadingRef.current = false;
      }, 1500);
    }
  }, [loading, loadingMore, hasMore, refreshing, products.length, onEndReached]);

  const handleRefresh = useCallback(() => {
    onRefresh();
  }, [onRefresh]);

  return (
    <FlatList
      style={{ flex: 1 }}
      data={products}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      refreshControl={
        <RefreshControl 
          refreshing={refreshing} 
          onRefresh={handleRefresh}
          tintColor={colors.primary}
          colors={[colors.primary]}
        />
      }
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.25}
      ListFooterComponent={renderFooter}
      contentContainerStyle={productListStyles.contentContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

export const ProductList = memo(ProductListComponent);

