import axios from 'axios';
import { env } from 'process';

export const httpClient = axios.create({
  baseURL: env.VITE_API_URL,
});
