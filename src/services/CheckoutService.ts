import { AxiosInstance } from 'axios';
import type { CartItem } from '../store/cart/cartSlice';

type CheckoutDto = { items: CartItem[] };

export class CheckoutService {
  constructor(private client: AxiosInstance) {}

  async checkout(_dto: CheckoutDto) {
    return { orderId: 'ORDER-12345' };
  }
}
