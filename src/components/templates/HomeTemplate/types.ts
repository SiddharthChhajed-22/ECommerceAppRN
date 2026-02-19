import type { Product } from '../../molecules/ProductCard/types';

export type HomeTemplateProps = {
  products: Product[];
  loading: boolean;
  refreshing: boolean;
  loadingMore: boolean;
  hasMore: boolean;
  onRefresh: () => void;
  onLoadMore: () => void;
  onAddToCart: (id: string) => void;
  onNavPress: (screen: string) => void;
  onCartPress: () => void;
  cartItemCount: number;
};
