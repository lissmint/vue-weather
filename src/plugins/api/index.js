import request from './request';

const extension = '.json';
const apiKey = import.meta.env.VITE_API_KEY;
const defaultParams = {
  key: apiKey,
};

const getIP = () =>
  request({
    baseURL: 'https://api.ipify.org?format=json',
    method: 'get',
  });

const lookupIP = (ip) =>
  request({
    url: '/ip' + extension,
    method: 'get',
    params: {
      ...defaultParams,
      q: ip,
    },
  });

const getWeather = (location) =>
  request({
    url: '/current' + extension,
    method: 'get',
    params: {
      ...defaultParams,
      q: location,
    },
  });

const getForecast = (location) =>
  request({
    url: '/forecast' + extension,
    method: 'get',
    params: {
      ...defaultParams,
      q: location,
    },
  });

const getSearchSuggestions = (query) =>
  request({
    url: '/forecast' + extension,
    method: 'get',
    params: {
      ...defaultParams,
      q: location,
    },
  });

export default {
  getIP,
  lookupIP,
  getWeather,
  getForecast,
  getSearchSuggestions,
};
