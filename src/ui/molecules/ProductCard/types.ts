export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export type ProductCardProps = {
  product: Product;
  onAddToCart: (id: string) => void;
};

