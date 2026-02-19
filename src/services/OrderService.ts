import { AxiosInstance } from 'axios';
import type { Order } from '../../store/orders/ordersSlice';
import { STATIC_DELAY_MS } from '../api/config/constants';

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

let ordersList: Order[] = [];

export class OrderService {
  constructor(private client: AxiosInstance) {}

  async getOrders(params: {
    page: number;
    pageSize: number;
  }): Promise<{ items: Order[]; hasMore: boolean }> {
    await delay(STATIC_DELAY_MS);
    const start = (params.page - 1) * params.pageSize;
    const end = start + params.pageSize;
    const slice = ordersList.slice(start, end);
    const hasMore = end < ordersList.length;
    return { items: slice, hasMore };
  }

  async createOrder(total: number): Promise<Order> {
    const newOrder: Order = {
      id: `ORDER-${Date.now()}`,
      total,
      status: 'Processing',
    };
    ordersList = [newOrder, ...ordersList];
    return newOrder;
  }
}
