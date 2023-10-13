import Http from './http';

const http = new Http('https://jsonplaceholder.typicode.com/');
const env = import.meta.env;

export { http, env };