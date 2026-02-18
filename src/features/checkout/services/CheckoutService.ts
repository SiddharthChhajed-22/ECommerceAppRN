import { AxiosInstance } from 'axios';
import { CartItem } from '../../cart/redux/cartSlice';

type CheckoutDto = { items: CartItem[] };

export class CheckoutService {
  constructor(private client: AxiosInstance) {}

  async checkout(_dto: CheckoutDto) {
    return { orderId: 'ORDER-12345' };
  }
}

