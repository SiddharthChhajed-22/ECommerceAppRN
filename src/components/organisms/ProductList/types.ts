import type { Product } from '../../molecules/ProductCard/types';

export type ProductListProps = {
  products: Product[];
  loading: boolean;
  refreshing: boolean;
  loadingMore: boolean;
  hasMore: boolean;
  onRefresh: () => void;
  onEndReached: () => void;
  onAddToCart: (id: string) => void;
};

