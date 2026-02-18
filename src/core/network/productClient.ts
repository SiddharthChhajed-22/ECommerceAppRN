import { AxiosInstance } from 'axios';
import { createAxiosClient } from './axiosBase';

class ProductClient {
  private static _instance: AxiosInstance;

  static get instance(): AxiosInstance {
    if (!ProductClient._instance) {
      ProductClient._instance = createAxiosClient('https://static-product-api.local');
    }
    return ProductClient._instance;
  }
}

export const productClient = ProductClient.instance;

