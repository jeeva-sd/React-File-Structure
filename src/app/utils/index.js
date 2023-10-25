import Http from './http';

const http = new Http(import.meta.env.VITE_API_BASE_URL);

export { http };