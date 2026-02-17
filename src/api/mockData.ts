import type { User,Order,Product } from '../types/domain';

export const FAKE_USER: User = {
    id: 'user-1',
    name:'John Doe',
    email: 'user@example.com',
};

export const PAGE_SIZE = 10;

export const FAKE_TOKEN = 'secure-token-123';

export function sleep(ms:number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve,ms));
}

export const PRODUCTS: Product[] = Array.from({length : 40}).map((_, idx)=>({
    id:`prod-${idx + 1}`,
    name: `Product ${idx + 1}`,
    description:`This is a nice product number ${idx + 1}.`,
    price: (10 + idx).toFixed(2),
    image:`https://picsum.photos/seed/${idx+1}/300/200`,
}));

let orders : Order[] = [];


export function getOrders(): Order[] {
  return orders;
}

export function setOrders(list: Order[]): void {
  orders = list;
}

export function addOrder(order: Order): Order {
  orders = [order, ...orders];
  return order;
}