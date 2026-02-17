import React, { useCallback } from 'react';
import { FlatList, View, ActivityIndicator, StyleSheet } from 'react-native';
import ProductCard from '../molecules/ProductCard';
import { useProducts } from '../../hooks/useProducts';
import { useCart } from '../../hooks/useCart';
import type { Product } from '../../types/domain';

export default function ProductList() {
  const { list, loading, refreshing, hasMore, loadMore, refresh } =
    useProducts();
  const { add } = useCart();
  // Initial load runs once from auth saga after login/signup

  const renderItem = useCallback(
    ({ item }: { item: Product }) => <ProductCard product={item} onAddToCart={add} />,
    [add],
  );

  const keyExtractor = useCallback((item: Product) => item.id, []);

  const onEndReached = useCallback(() => {
    if (hasMore && !loading) {
      loadMore();
    }
  }, [hasMore, loading, loadMore]);

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={{ padding: 12 }}
        refreshing={refreshing}
        onRefresh={refresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          loading && hasMore && !refreshing ? (
            <View style={{ paddingVertical: 16 }}>
              <ActivityIndicator color="#1e88e5" />
            </View>
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

