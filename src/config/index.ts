import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:8010',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});