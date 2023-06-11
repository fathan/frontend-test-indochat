import AxiosClient from './axios';

const transform = {
  requestInterceptors: async (configuration) => {
    return configuration;
  },

  // ////////////////////////////////

  requestInterceptorsError: (error) => {
    return error;
  },

  // ////////////////////////////////

  responseInterceptors: (response) => {
    return response;
  },

  // ////////////////////////////////

  responseInterceptorsError: async (error) => {
    const { response, message } = error || {};

    try {
      if (message?.includes('Network Error')) {
        window.alert('Check your internet connection!');
      }

      if (response?.status !== 401) {
        return Promise.reject(error);
      }
    }
    catch (error) {
      throw new Error(error);
    }

    return Promise.reject(error);
  }
};

// ////////////////////////////////

let axiosClient;

const initializeHttp = () => {
  axiosClient = new AxiosClient({
    baseURL: import.meta.env.VITE_BASE_URL_API,
    timeout: 60000, // 60 second
    transform
  });
  
  return axiosClient;
};

export default initializeHttp();
