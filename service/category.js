import axios from 'axios';

export function query(current, pageSize) {
  return axios.get('/api/category', {
    params: {
      current,
      pageSize,
    }
  });
}