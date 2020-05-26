import axios from 'axios';

const api = axios.create({
  baseURL: 'https://betheher0o-backend.herokuapp.com/'
})

export default api;