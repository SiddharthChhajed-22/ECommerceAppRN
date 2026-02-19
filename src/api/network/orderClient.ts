import { AxiosInstance } from 'axios';
import { createAxiosClient } from './axiosBase';

class OrderClient {
  private static _instance: AxiosInstance;

  static get instance(): AxiosInstance {
    if (!OrderClient._instance) {
      OrderClient._instance = createAxiosClient('https://static-order-api.local');
    }
    return OrderClient._instance;
  }
}

export const orderClient = OrderClient.instance;

