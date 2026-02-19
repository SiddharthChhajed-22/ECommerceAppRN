import { AxiosInstance } from 'axios';
import { createAxiosClient } from './axiosBase';

class AuthClient {
  private static _instance: AxiosInstance;

  static get instance(): AxiosInstance {
    if (!AuthClient._instance) {
      AuthClient._instance = createAxiosClient('https://static-auth-api.local');
    }
    return AuthClient._instance;
  }
}

export const authClient = AuthClient.instance;

