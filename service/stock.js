import axios from 'axios';

export function query_stocks(current, pageSize) {
  return axios.get('/api/stocks', {
    params: {
      current,
      pageSize,
    }
  });
}