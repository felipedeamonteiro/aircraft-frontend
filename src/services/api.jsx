import axios from 'axios';

const api = axios.create({
  baseURL: 'https://infinite-dawn-93085.herokuapp.com',
});

export default api;
