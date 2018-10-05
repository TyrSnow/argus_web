import axios from 'axios';

export function solve_auth(token = localStorage.getItem('token')) {
  return axios.get('/api/session', {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(resp => {
    localStorage.setItem('token', resp.data.data.token);
    return Promise.resolve(resp);
  });
}

export const login = (user, password) => axios.post('/api/session', {
  user,
  password,
});

export const regist = (name, password) => axios.post('/api/users', {
  name,
  password,
});
