import type { CartItem } from '../../../../../store/cart/cartSlice';

export type CartTemplateProps = {
  items: CartItem[];
  total: number;
  currencySymbol: string;
  onEmptyCart: () => void;
  onBrowseProducts: () => void;
  onCheckout: () => void;
  onBack: () => void;
};
