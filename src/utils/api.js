import axios from 'axios';

const request = axios.create({
  baseURL: 'https://d55-ec-test.herokuapp.com/api/'
});

export const postReadings = (body) => {
  return request.post('/readings', body).then(({ data }) => {
    return data;
  });
};

export const getAccounts = () => {
  return request.get('/accounts').then(({ data }) => {
    return data;
  });
};

export const getReadings = () => {
  return request.get('/readings').then(({ data }) => {
    return data;
  });
};
