import React from 'react';
import { OrderListTemplate } from '../../components/templates/OrderListTemplate';
import { useOrdersData } from '../../hooks/orders';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { MainStackParamList } from '../../navigation/MainNavigator';

type OrdersNavProp = NativeStackNavigationProp<MainStackParamList, 'Orders'>;

export const OrderListScreen: React.FC = () => {
  const navigation = useNavigation<OrdersNavProp>();
  const {
    orders,
    loading,
    refreshing,
    loadingMore,
    hasMore,
    refresh,
    loadMore,
  } = useOrdersData();

  return (
    <OrderListTemplate
      orders={orders}
      loading={loading}
      refreshing={refreshing}
      loadingMore={loadingMore}
      hasMore={hasMore}
      onRefresh={refresh}
      onLoadMore={loadMore}
      onBack={() => navigation.goBack()}
    />
  );
};
