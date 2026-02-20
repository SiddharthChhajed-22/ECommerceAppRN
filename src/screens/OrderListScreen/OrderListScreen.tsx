import React from 'react';
import { OrderListTemplate } from '../../components/templates/OrderListTemplate';
import { useOrdersData } from '../../hooks/orders';

export const OrderListScreen: React.FC = () => {
  const props = useOrdersData();
  return <OrderListTemplate {...props} />;
};
