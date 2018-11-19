import auth from '../utils/auth';

const baseUrl = 'http://127.0.0.1:5000';

export const getHeaders = () => ({
  'Content-Type': 'application/json',
});

export const authenticationUrls = {
  login: `${baseUrl}/login`,
};
