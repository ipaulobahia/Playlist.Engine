import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://ba8d-186-235-79-149.ngrok-free.app',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});