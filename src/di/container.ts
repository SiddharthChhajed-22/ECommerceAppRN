import { authClient } from '../api/network/authClient';
import { productClient } from '../api/network/productClient';
import { orderClient } from '../api/network/orderClient';
import { AuthService } from '../services/AuthService';
import { ProductService } from '../services/ProductService';
import { OrderService } from '../services/OrderService';
import { CheckoutService } from '../services/CheckoutService';

class Container {
  authService = new AuthService(authClient);
  productService = new ProductService(productClient);
  orderService = new OrderService(orderClient);
  checkoutService = new CheckoutService(orderClient);
}

export const container = new Container();
