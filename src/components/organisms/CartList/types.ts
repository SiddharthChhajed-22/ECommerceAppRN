import type { CartItem } from '../../../../store/cart/cartSlice';

export type CartListProps = {
  items: CartItem[];
  onRemoveItem?: (productId: string) => void;
};

