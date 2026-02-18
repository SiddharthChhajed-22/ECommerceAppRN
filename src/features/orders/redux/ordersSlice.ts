import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Order = {
  id: string;
  total: number;
  status: string;
};

type OrdersState = {
  items: Order[];
  page: number;
  hasMore: boolean;
  loading: boolean;
  refreshing: boolean;
  loadingMore: boolean;
  error: string | null;
};

const initialState: OrdersState = {
  items: [],
  page: 1,
  hasMore: true,
  loading: false,
  refreshing: false,
  loadingMore: false,
  error: null,
};

const slice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    fetchOrdersRequested(
      state,
      action: PayloadAction<{ page?: number; refresh?: boolean }> = {},
    ) {
      state.error = null;
      const { page = 1, refresh = false } = action.payload;
      
      if (refresh) {
        // Pull to refresh
        state.refreshing = true;
        state.loading = false;
        state.loadingMore = false;
        state.page = 1;
      } else if (page === 1) {
        // Initial load
        if (state.items.length === 0) {
          state.loading = true;
          state.refreshing = false;
          state.loadingMore = false;
        }
      } else {
        // Loading more (pagination)
        state.loadingMore = true;
        state.loading = false;
        state.refreshing = false;
      }
    },
    fetchOrdersSucceeded(
      state,
      action: PayloadAction<{ items: Order[]; page: number; hasMore: boolean }>,
    ) {
      const { items, page, hasMore } = action.payload;
      state.page = page;
      state.hasMore = hasMore;
      state.loading = false;
      state.refreshing = false;
      state.loadingMore = false;
      // Replace items on refresh/page 1, append on pagination
      state.items = page === 1 ? items : [...state.items, ...items];
    },
    fetchOrdersFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.refreshing = false;
      state.loadingMore = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchOrdersRequested,
  fetchOrdersSucceeded,
  fetchOrdersFailed,
} = slice.actions;

export default slice.reducer;
