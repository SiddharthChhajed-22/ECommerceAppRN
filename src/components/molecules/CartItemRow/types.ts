export type CartItemRowProps = {
  name: string;
  price: number;
  quantity: number;
  productId?: string;
  onRemove?: () => void;
};

