import { call, put } from 'redux-saga/effects';
import { handleFetchProducts } from '../../store/products/productsSaga';
import {
  fetchProductsFailed,
  fetchProductsRequested,
  fetchProductsSucceeded,
} from '../../store/products/productsSlice';
import { HARD_CODED } from '../../api/config/constants';
import { container } from '../../di/container';

describe('productsSaga (unit)', () => {
  it('yields call(getProducts) then put(success) on happy path', () => {
    const action = fetchProductsRequested({ page: 1 });
    const gen = handleFetchProducts(action);

    const expectedCall = call(
      [container.productService, 'getProducts'],
      { page: 1, pageSize: HARD_CODED.defaultPageSize },
    );
    expect(gen.next().value).toEqual(expectedCall);

    const fakeResult = { items: [{ id: '1' }], hasMore: true };
    const expectedPut = put(
      fetchProductsSucceeded({
        items: fakeResult.items as any,
        page: 1,
        hasMore: true,
      }),
    );
    expect(gen.next(fakeResult as any).value).toEqual(expectedPut);
    expect(gen.next().done).toBe(true);
  });

  it('puts failure when an error is thrown', () => {
    const action = fetchProductsRequested({ page: 1 });
    const gen = handleFetchProducts(action);

    // advance to first yield (call)
    gen.next();
    const expectedPut = put(fetchProductsFailed('Failed to load products'));
    const error = { message: undefined } as any;
    expect(gen.throw(error).value).toEqual(expectedPut);
  });
});

