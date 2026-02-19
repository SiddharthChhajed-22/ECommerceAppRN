import type { CartItem } from '../../../../store/cart/cartSlice';

export type CheckoutTemplateProps = {
  cartItems: CartItem[];
  total: number;
  currencySymbol: string;
  loading: boolean;
  success: boolean;
  error: string | null;
  onConfirm: () => void;
  onContinueShopping: () => void;
  onBack: () => void;
};
