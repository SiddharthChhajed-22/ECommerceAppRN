import reducer, {
  fetchProductsFailed,
  fetchProductsRequested,
  fetchProductsSucceeded,
} from '../../features/home/redux/productsSlice';
import type { Product } from '../../ui/molecules/ProductCard';

const p = (id: string): Product => ({
  id,
  name: `Product ${id}`,
  price: 100,
  image: 'https://example.com/img.png',
});

describe('productsSlice', () => {
  it('sets loading=true on initial fetch when empty', () => {
    const state = reducer(undefined, fetchProductsRequested({ page: 1 }));
    expect(state.loading).toBe(true);
    expect(state.refreshing).toBe(false);
    expect(state.loadingMore).toBe(false);
  });

  it('sets refreshing=true on refresh fetch', () => {
    const state = reducer(
      { ...reducer(undefined, { type: 'init' }), items: [p('1')] },
      fetchProductsRequested({ page: 1, refresh: true }),
    );
    expect(state.refreshing).toBe(true);
    expect(state.loading).toBe(false);
    expect(state.loadingMore).toBe(false);
    expect(state.page).toBe(1);
  });

  it('sets loadingMore=true on pagination fetch (page>1)', () => {
    const base = { ...reducer(undefined, { type: 'init' }), items: [p('1')] };
    const state = reducer(base, fetchProductsRequested({ page: 2 }));
    expect(state.loadingMore).toBe(true);
    expect(state.loading).toBe(false);
    expect(state.refreshing).toBe(false);
  });

  it('replaces items on page=1 success and appends on page>1', () => {
    const first = reducer(
      undefined,
      fetchProductsSucceeded({ items: [p('1')], page: 1, hasMore: true }),
    );
    expect(first.items.map(i => i.id)).toEqual(['1']);

    const second = reducer(
      first,
      fetchProductsSucceeded({ items: [p('2')], page: 2, hasMore: false }),
    );
    expect(second.items.map(i => i.id)).toEqual(['1', '2']);
    expect(second.hasMore).toBe(false);
    expect(second.loadingMore).toBe(false);
  });

  it('stores error on failure and clears loaders', () => {
    const state = reducer(
      { ...reducer(undefined, { type: 'init' }), loading: true },
      fetchProductsFailed('boom'),
    );
    expect(state.error).toBe('boom');
    expect(state.loading).toBe(false);
    expect(state.refreshing).toBe(false);
    expect(state.loadingMore).toBe(false);
  });
});

