import type { Order } from '../../../../../store/orders/ordersSlice';

export type OrderListTemplateProps = {
  orders: Order[];
  loading: boolean;
  refreshing: boolean;
  loadingMore: boolean;
  hasMore: boolean;
  onRefresh: () => void;
  onLoadMore: () => void;
  onBack: () => void;
};
