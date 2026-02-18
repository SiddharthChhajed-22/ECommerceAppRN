import { AxiosInstance } from 'axios';
import { Product } from '../../../ui/molecules/ProductCard';
import { STATIC_DELAY_MS } from '../../../core/config/constants';

type GetProductsParams = { page: number; pageSize: number };

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class ProductService {
  constructor(private client: AxiosInstance) {}

  async getProducts(params: GetProductsParams): Promise<{ items: Product[]; hasMore: boolean }> {
    // Always add a minimum delay to ensure smooth UI transitions
    // This prevents RefreshControl from getting stuck due to instant responses
    await delay(STATIC_DELAY_MS);

    const totalProducts = 100;
    const allProducts: Product[] = Array.from({ length: totalProducts }).map((_, index) => ({
      id: String(index + 1),
      name: `Product ${index + 1}`,
      price: 100 + index * 5,
      image: `https://picsum.photos/400?random=${index + 1}`,
    }));

    const start = (params.page - 1) * params.pageSize;
    const end = start + params.pageSize;
    const slice = allProducts.slice(start, end);
    const hasMore = end < allProducts.length;

    return { items: slice, hasMore };
  }
}
