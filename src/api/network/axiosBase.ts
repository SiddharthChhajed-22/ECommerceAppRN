import axios, { AxiosInstance } from 'axios';
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

  instance.interceptors.request.use(config => {
    if (getAuthToken) {
      const token = getAuthToken();
      if (token) {
        config.headers = {
          ...(config.headers || {}),
          Authorization: `Bearer ${token}`,
        };
      }
    }
    return config;
  });

  instance.interceptors.response.use(async response => {
    await new Promise(res => setTimeout(res, STATIC_DELAY_MS));
    return response;
  });

  return instance;
};

