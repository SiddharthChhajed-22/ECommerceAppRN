import React, { memo } from 'react';
import { View } from 'react-native';
import { AppText } from '../../components/atoms/AppText';
import { HARD_CODED } from '../../api/config/constants';
import { colors } from '../../theme/colors';
import { orderListStyles } from './styles';
import type { OrderListProps } from './types';

const OrderListComponent: React.FC<OrderListProps> = ({ orders }) => {
  if (orders.length === 0) {
    return null;
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return colors.primary;
      case 'processing':
        return colors.accent;
      case 'cancelled':
        return colors.error;
      default:
        return colors.textSecondary;
    }
  };

  return (
    <View style={orderListStyles.container}>
      {orders.map((order) => (
        <View key={order.id} style={orderListStyles.orderCard}>
          <View style={orderListStyles.orderHeader}>
            <AppText variant="subheading" style={orderListStyles.orderId}>
              {order.id}
            </AppText>
            <View
              style={[
                orderListStyles.statusBadge,
                { backgroundColor: getStatusColor(order.status) },
              ]}
            >
              <AppText style={orderListStyles.statusText}>{order.status}</AppText>
            </View>
          </View>
          <View style={orderListStyles.orderDetails}>
            <AppText style={orderListStyles.totalLabel}>Total:</AppText>
            <AppText variant="subheading" style={orderListStyles.totalAmount}>
              {HARD_CODED.productCurrency}
              {order.total.toFixed(2)}
            </AppText>
          </View>
        </View>
      ))}
    </View>
  );
};

export const OrderList = memo(OrderListComponent);

