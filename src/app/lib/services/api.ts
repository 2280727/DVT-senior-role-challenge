import axios from 'axios';

import { ENDPOINTS } from './endpoints';

export const api = axios.create({
  baseURL: ENDPOINTS.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
   // 'country_code': 'swz'
  },
});