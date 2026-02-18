import reducer, {
  fetchOrdersFailed,
  fetchOrdersRequested,
  fetchOrdersSucceeded,
} from '../../features/orders/redux/ordersSlice';
import type { Order } from '../../features/orders/redux/ordersSlice';

const o = (id: string, total = 100, status = 'Processing'): Order => ({
  id,
  total,
  status,
});

describe('ordersSlice', () => {
  it('sets loading=true on initial fetch when empty', () => {
    const state = reducer(undefined, fetchOrdersRequested({ page: 1 }));
    expect(state.loading).toBe(true);
    expect(state.refreshing).toBe(false);
    expect(state.loadingMore).toBe(false);
  });

  it('sets loadingMore=true on pagination fetch (page>1)', () => {
    const base = { ...reducer(undefined, { type: 'init' }), items: [o('A')] };
    const state = reducer(base, fetchOrdersRequested({ page: 2 }));
    expect(state.loadingMore).toBe(true);
    expect(state.loading).toBe(false);
    expect(state.refreshing).toBe(false);
  });

  it('replaces items on page=1 success and appends on page>1', () => {
    const first = reducer(
      undefined,
      fetchOrdersSucceeded({ items: [o('A')], page: 1, hasMore: true }),
    );
    const second = reducer(
      first,
      fetchOrdersSucceeded({ items: [o('B')], page: 2, hasMore: false }),
    );
    expect(second.items.map(i => i.id)).toEqual(['A', 'B']);
    expect(second.hasMore).toBe(false);
  });

  it('stores error on failure and clears loaders', () => {
    const state = reducer(
      { ...reducer(undefined, { type: 'init' }), loading: true },
      fetchOrdersFailed('nope'),
    );
    expect(state.error).toBe('nope');
    expect(state.loading).toBe(false);
    expect(state.refreshing).toBe(false);
    expect(state.loadingMore).toBe(false);
  });
});

