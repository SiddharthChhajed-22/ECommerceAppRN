export type User = {
  id: string;
  name: string;
  email: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export type CartItem = {
  product: Product;
  quantity: number;
}

export type Order = {
  id: string;
  items: CartItem[];
  total: number;
  createdAt: string;
}