import axios from 'axios';

export const http = axios.create({
  baseURL: ' https://a210-186-235-79-149.ngrok-free.app',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});