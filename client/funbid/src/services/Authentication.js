import axios from 'axios';
import { authenticationUrls } from '../config/api';

const AuthenticationService = {
  login(data) {
    return axios({
      method: 'post',
      url: authenticationUrls.login,
      data,
    });
  },
};

export default AuthenticationService;
