import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';

// Step 3: Create Axios instance with common configuration
const authAxiosClient: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Base URL for all requests
  timeout: 5000, // Timeout after 5 seconds
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = localStorage.getItem("access_token");
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}

// Step 4: Request interceptor
authAxiosClient.interceptors.request.use(
    onRequest,
    (error) => {
      // Handle request error
      console.error('Request Error:', error);
      return Promise.reject(error);
    }
);

// Step 5: Response interceptor
authAxiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log('Response Received:', response); // Log response for debugging
      return response;
    },
    (error) => {
      // Handle response errors (e.g., token expiry, server errors)
      if (error.response?.status === 401) {
        console.warn('Unauthorized! Redirecting to login...');
        // Optionally, redirect to login page
      }
      console.error('Response Error:', error);
      return Promise.reject(error);
    }
);

// Step 6: Export the Axios client
export default authAxiosClient;