import axios from 'axios';

const request = axios.create({
  baseURL: 'http://api.weatherapi.com/v1',
});

export default request;
