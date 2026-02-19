import React, { useCallback, useRef } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { MainTemplate } from '../MainTemplate';
import { NavigationHeader } from '../../molecules/NavigationHeader';
import { Loader } from '../../atoms/Loader';
import { AppText } from '../../atoms/AppText';
import { colors } from '../../../theme/colors';
import type { Order } from '../../../../store/orders/ordersSlice';
import { orderListTemplateStyles } from './styles';
import type { OrderListTemplateProps } from './types';

export const OrderListTemplate: React.FC<OrderListTemplateProps> = ({
  orders,
  loading,
  refreshing,
  loadingMore,
  hasMore,
  onRefresh,
  onLoadMore,
  onBack,
}) => {
  const isEndReachedInProgress = useRef(false);

  const handleEndReached = useCallback(() => {
    if (isEndReachedInProgress.current) return;
    if (!loading && !loadingMore && !refreshing && hasMore && orders.length > 0) {
      isEndReachedInProgress.current = true;
      onLoadMore();
      setTimeout(() => {
        isEndReachedInProgress.current = false;
      }, 1000);
    }
  }, [loading, loadingMore, hasMore, refreshing, orders.length, onLoadMore]);

  const renderFooter = useCallback(() => {
    if (loadingMore && !refreshing && !loading && orders.length > 0) {
      return (
        <View style={orderListTemplateStyles.footer}>
          <ActivityIndicator size="small" color={colors.primary} />
        </View>
      );
    }
    return null;
  }, [loadingMore, refreshing, loading, orders.length]);

  const renderItem = useCallback(({ item }: { item: Order }) => {
    return (
      <View style={orderListTemplateStyles.orderItemWrapper}>
        <View style={orderListTemplateStyles.orderCard}>
          <View style={orderListTemplateStyles.orderHeader}>
            <AppText variant="subheading" style={orderListTemplateStyles.orderId}>
              {item.id}
            </AppText>
            <View
              style={[
                orderListTemplateStyles.statusBadge,
                {
                  backgroundColor:
                    item.status === 'Delivered'
                      ? colors.primary
                      : item.status === 'Processing'
                        ? colors.accent
                        : colors.error,
                },
              ]}
            >
              <AppText style={orderListTemplateStyles.statusText}>
                {item.status}
              </AppText>
            </View>
          </View>
          <View style={orderListTemplateStyles.orderDetails}>
            <AppText style={orderListTemplateStyles.totalLabel}>Total:</AppText>
            <AppText variant="subheading" style={orderListTemplateStyles.totalAmount}>
              ₹{item.total.toFixed(2)}
            </AppText>
          </View>
        </View>
      </View>
    );
  }, []);

  const keyExtractor = useCallback((item: Order) => item.id, []);

  const header = (
    <NavigationHeader
      title="My Orders"
      showBack
      onBackPress={onBack}
    />
  );

  const content = (
    <FlatList
      style={[{ flex: 1 }, orderListTemplateStyles.container]}
      data={orders}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={colors.primary}
          colors={[colors.primary]}
        />
      }
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.3}
      ListFooterComponent={renderFooter}
      contentContainerStyle={orderListTemplateStyles.contentContainer}
      ListEmptyComponent={
        loading && orders.length === 0 ? (
          <Loader />
        ) : (
          <View style={orderListTemplateStyles.emptyContainer}>
            <AppText variant="subheading" style={orderListTemplateStyles.emptyText}>
              No orders yet
            </AppText>
            <AppText style={orderListTemplateStyles.emptySubtext}>
              Start shopping to see your orders here
            </AppText>
          </View>
        )
      }
      showsVerticalScrollIndicator={false}
    />
  );

  return <MainTemplate header={header} content={content} />;
};
