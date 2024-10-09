import axios from 'axios';
import {ENV} from '../env';

export const api = axios.create({
  baseURL: ENV.BASE_URL,
  headers: {
    api_key: ENV.API_KEY,
    'api-key': ENV.API_KEY,
  },
});
