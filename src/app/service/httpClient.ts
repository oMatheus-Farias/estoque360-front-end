import axios from 'axios';

import { env } from '../config/envConfig';

export const httpClient = axios.create({
  baseURL: env.VITE_API_URL,
});
