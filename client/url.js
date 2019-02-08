import axios from 'axios';

export const baseURL = process.env.NODE_ENV === 'development' ? process.env.DEV_URL : process.env.URL;

const ax = axios.create({
  baseURL,
});

export default ax;
