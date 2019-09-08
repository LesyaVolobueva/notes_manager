/* eslint-disable consistent-return */
import axios from 'axios';
import { identity } from 'ramda';

import { getToken, signIn } from './auth';

const getIsTokenRequest = (config) => (
  config && config.url.endsWith('tokens') && config.method === 'post'
);

const onRequest = (config) => {
  const isTokenRequest = getIsTokenRequest(config);

  return isTokenRequest ? config : {
    ...config,
    headers: {
      ...config.headers,
      Authorization: getToken(),
    },
  };
};

const onRequestError = (error) => (
  Promise.reject(error)
);

const onResponseError = (error) => {
  const isTokenRequest = getIsTokenRequest(error.config);
  const isTokenExpired = error.response && error.response.status === 'UNAUTHORIZED';

  if (isTokenExpired) {
    signIn();

    if (!isTokenRequest) {
      axios(error.config);
    }
  } else {
    return Promise.reject(error);
  }
};

const configureAxios = () => {
  axios.defaults.baseURL = 'http://159.89.96.181/api/v1/';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.interceptors.request.use(onRequest, onRequestError);
  axios.interceptors.response.use(identity, onResponseError);
};

export default configureAxios;
