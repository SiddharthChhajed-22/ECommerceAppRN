import { AxiosInstance } from 'axios';
import { Order } from '../redux/ordersSlice';
import { HARD_CODED, STATIC_DELAY_MS } from '../../../core/config/constants';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Static storage for orders (simulating API) - start with empty array
let ordersList: Order[] = [];

export class OrderService {
  constructor(private client: AxiosInstance) {}

  async getOrders(params: { page: number; pageSize: number }): Promise<{ items: Order[]; hasMore: boolean }> {
    // Always add a minimum delay to ensure smooth UI transitions
    // This prevents RefreshControl from getting stuck due to instant responses
    await delay(STATIC_DELAY_MS);

    const start = (params.page - 1) * params.pageSize;
    const end = start + params.pageSize;
    const slice = ordersList.slice(start, end);
    const hasMore = end < ordersList.length;

    return { items: slice, hasMore };
  }

  async createOrder(total: number): Promise<Order> {
    // Create new order
    const newOrder: Order = {
      id: `ORDER-${Date.now()}`,
      total,
      status: 'Processing',
    };
    ordersList = [newOrder, ...ordersList]; // Add to beginning
    return newOrder;
  }
}
