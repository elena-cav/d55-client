import axios from 'axios';

const request = axios.create({
  baseURL: 'https://d55-ec-test.herokuapp.com/api/'
});

export const postReadings = (body) => {
  return request.post('/readings', body).then(({ data }) => {
    return data;
  });
};

export const getAccounts = (sort_by, order) => {
  return request
    .get('/accounts', { params: { sort_by, order } })
    .then(({ data }) => {
      return data.accounts;
    });
};

export const getReadings = (sort_by, order) => {
  console.log(sort_by, order);
  return request
    .get('/readings', { params: { sort_by, order } })
    .then(({ data }) => {
      console.log(data.readings);
      return data.readings;
    });
};
