import axios from 'axios';

export const baseURL =
  'Instaclone-env-1.cnnhnf83mp.us-east-2.elasticbeanstalk.com';

const ax = axios.create({
  baseURL,
});

export default ax;
