import axios from 'axios';
import { autorun } from 'mobx';
import Router from 'next/router';

import authStore from '../stores/authStore';

console.debug('_main.js was init');
autorun(() => {
  axios.defaults.headers.common.authorization = `Bearer ${authStore.token}`;
});

axios.interceptors.response.use(
  response => {
    if (response.data.success) {
      return response;
    } else {
      if ([20000, 20001].indexOf(response.data.code) !== -1) {
        Router.push('/login');
      }
    }
    return Promise.reject(response.data);
  },
  error => {
    console.debug('Request error: ', error);
    if (error.response) {
      switch (error.response.status) {
        case 401:
          Router.push('/login');
          break;
        case 500:
        default:
          return Promise.reject(error.response.data.message ? error.response.data : {
            message: '后台服务不可用',
          })
      }
    }
  }
)
