import axios from 'axios';

import { StorageKeys } from '@/hooks';
import { handleUnauthorized } from '@/navigation';

import { storage } from '@/App';
import { ENV } from '@/constants';

const axiosClient = axios.create({
  baseURL: ENV.API_URL,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = storage.getString(StorageKeys.AccessToken);
    if (accessToken) {
      config.headers.setAuthorization(`Bearer ${accessToken}`);
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      handleUnauthorized();
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default axiosClient;
