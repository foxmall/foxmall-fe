import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';
import EnvConfigVariable from "../../env/EnvConfigVariable";

// Step 3: Create Axios instance with common configuration
const unAuthAxiosClient: AxiosInstance = axios.create({
  baseURL: EnvConfigVariable.API_BACKEND_URI, // Base URL for all requests
  timeout: 5000, // Timeout after 5 seconds
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default unAuthAxiosClient;
