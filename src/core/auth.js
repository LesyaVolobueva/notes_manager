import axios from 'axios';

const requestToken = () => (
  axios.post('tokens', {
    userName: 'LesyaVolobueva',
  })
);

const setToken = (token) => {
  localStorage.setItem('token', `Bearer ${token}`);
};

export const signIn = async () => {
  try {
    const response = await requestToken();

    setToken(response.data.token);
  } catch (error) {
    console.error(error);
  }
};

export const getToken = () => {
  const token = localStorage.getItem('token');

  if (token) {
    return token;
  } else {
    signIn();

    return localStorage.getItem('token');
  }
};
