import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../src/components/molecules/ProductCard/types';

type ProductsState = {
  items: Product[];
  page: number;
  hasMore: boolean;
  loading: boolean;
  refreshing: boolean;
  loadingMore: boolean;
  error: string | null;
};

const initialState: ProductsState = {
  items: [],
  page: 1,
  hasMore: true,
  loading: false,
  refreshing: false,
  loadingMore: false,
  error: null,
};

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsRequested(
      state,
      action: PayloadAction<{ page: number; refresh?: boolean }>,
    ) {
      state.error = null;
      const { page, refresh } = action.payload;
      if (refresh) {
        state.refreshing = true;
        state.loading = false;
        state.loadingMore = false;
        state.page = 1;
      } else if (page === 1 && state.items.length === 0) {
        state.loading = true;
        state.refreshing = false;
        state.loadingMore = false;
      } else if (page > 1) {
        state.loadingMore = true;
        state.loading = false;
        state.refreshing = false;
      }
    },
    fetchProductsSucceeded(
      state,
      action: PayloadAction<{ items: Product[]; page: number; hasMore: boolean }>,
    ) {
      const { items, page, hasMore } = action.payload;
      state.page = page;
      state.hasMore = hasMore;
      state.loading = false;
      state.refreshing = false;
      state.loadingMore = false;
      state.items = page === 1 ? items : [...state.items, ...items];
    },
    fetchProductsFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.refreshing = false;
      state.loadingMore = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductsRequested,
  fetchProductsSucceeded,
  fetchProductsFailed,
} = slice.actions;

export default slice.reducer;
