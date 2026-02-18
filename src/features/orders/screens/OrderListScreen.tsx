import React, { useCallback, useRef } from 'react';
import { ScrollView, View, FlatList, RefreshControl } from 'react-native';
import { MainTemplate } from '../../../ui/templates/MainTemplate';
import { NavigationHeader } from '../../../ui/molecules/NavigationHeader';
import { OrderList } from '../../../ui/organisms/OrderList';
import { useOrders } from '../hooks/useOrders';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../../app/navigation/MainNavigator';
import { Loader } from '../../../ui/atoms/Loader';
import { AppText } from '../../../ui/atoms/AppText';
import { ordersStyles } from '../styles/ordersStyles';
import { ActivityIndicator } from 'react-native';
import { colors } from '../../../core/theme/colors';
import { spacing } from '../../../core/theme/spacing';
import { Order } from '../redux/ordersSlice';

type OrdersNavProp = NativeStackNavigationProp<MainStackParamList, 'Orders'>;

export const OrderListScreen: React.FC = () => {
  const navigation = useNavigation<OrdersNavProp>();
  const { orders, loading, refreshing, loadingMore, hasMore, refresh, loadMore } = useOrders();
  const isEndReachedInProgress = useRef(false);

  const handleEndReached = useCallback(() => {
    if (isEndReachedInProgress.current) {
      return;
    }

    if (!loading && !loadingMore && !refreshing && hasMore && orders.length > 0) {
      isEndReachedInProgress.current = true;
      loadMore();
      setTimeout(() => {
        isEndReachedInProgress.current = false;
      }, 1000);
    }
  }, [loading, loadingMore, hasMore, refreshing, orders.length, loadMore]);

  const handleRefresh = useCallback(() => {
    // Delegate refresh decision logic to useOrders hook
    refresh();
  }, [refresh]);

  const renderFooter = useCallback(() => {
    if (loadingMore && !refreshing && !loading && orders.length > 0) {
      return (
        <View style={ordersStyles.footer}>
          <ActivityIndicator size="small" color={colors.primary} />
        </View>
      );
    }
    return null;
  }, [loadingMore, refreshing, loading, orders.length]);

  const renderItem = useCallback(({ item }: { item: Order }) => {
    return (
      <View style={ordersStyles.orderItemWrapper}>
        <View style={ordersStyles.orderCard}>
          <View style={ordersStyles.orderHeader}>
            <AppText variant="subheading" style={ordersStyles.orderId}>
              {item.id}
            </AppText>
            <View
              style={[
                ordersStyles.statusBadge,
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
              <AppText style={ordersStyles.statusText}>{item.status}</AppText>
            </View>
          </View>
          <View style={ordersStyles.orderDetails}>
            <AppText style={ordersStyles.totalLabel}>Total:</AppText>
            <AppText variant="subheading" style={ordersStyles.totalAmount}>
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
      onBackPress={() => navigation.goBack()}
    />
  );

  const content = (
    <FlatList
      style={[{ flex: 1 }, ordersStyles.container]}
      data={orders}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl 
          refreshing={refreshing} 
          onRefresh={handleRefresh}
          tintColor={colors.primary}
          colors={[colors.primary]}
        />
      }
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.3}
      ListFooterComponent={renderFooter}
      contentContainerStyle={ordersStyles.contentContainer}
      ListEmptyComponent={
        loading && orders.length === 0 ? (
          <Loader />
        ) : (
          <View style={ordersStyles.emptyContainer}>
            <AppText variant="subheading" style={ordersStyles.emptyText}>
              No orders yet
            </AppText>
            <AppText style={ordersStyles.emptySubtext}>
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
