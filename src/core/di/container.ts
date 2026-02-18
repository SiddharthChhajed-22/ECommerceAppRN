import { authClient } from '../network/authClient';
import { productClient } from '../network/productClient';
import { orderClient } from '../network/orderClient';
import { AuthService } from '../../features/auth/services/AuthService';
import { ProductService } from '../../features/home/services/ProductService';
import { OrderService } from '../../features/orders/services/OrderService';
import { CheckoutService } from '../../features/checkout/services/CheckoutService';

class Container {
  authService = new AuthService(authClient);
  productService = new ProductService(productClient);
  orderService = new OrderService(orderClient);
  checkoutService = new CheckoutService(orderClient);
}

export const container = new Container();
