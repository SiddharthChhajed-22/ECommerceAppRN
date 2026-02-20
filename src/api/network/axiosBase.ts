import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { STATIC_DELAY_MS } from '../config/constants';

let getAuthToken: (() => string | null) | null = null;

// Allow app to register how to read auth token (e.g. Redux, AsyncStorage)
export const registerAuthTokenGetter = (fn: () => string | null) => {
  getAuthToken = fn;
};

export const createAxiosClient = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    timeout: 5000,
  });

  instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    if (getAuthToken) {
      const token = getAuthToken();
      if (token) {
        config.headers.set('Authorization', `Bearer ${token}`);
      }
    }
    return config;
  });

  instance.interceptors.response.use(async response => {
    await new Promise<void>(resolve => setTimeout(() => resolve(), STATIC_DELAY_MS));
    return response;
  });

  return instance;
};

