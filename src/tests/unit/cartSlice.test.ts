import reducer, {
  addItemDirect,
  clearCart,
} from '../../../store/cart/cartSlice';
import type { Product } from '../../components/molecules/ProductCard/types';

const product: Product = {
  id: '1',
  name: 'Product 1',
  price: 100,
  image: 'https://example.com/img.png',
};

describe('cartSlice', () => {
  it('adds a new item with quantity=1', () => {
    const state = reducer(undefined, addItemDirect(product));
    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toMatchObject({ id: '1', quantity: 1 });
  });

  it('increments quantity when adding the same item again', () => {
    const s1 = reducer(undefined, addItemDirect(product));
    const s2 = reducer(s1, addItemDirect(product));
    expect(s2.items).toHaveLength(1);
    expect(s2.items[0].quantity).toBe(2);
  });

  it('clears cart', () => {
    const s1 = reducer(undefined, addItemDirect(product));
    const s2 = reducer(s1, clearCart());
    expect(s2.items).toEqual([]);
  });
});

