import axios from 'axios';

const request = axios.create({
  baseURL: 'https://d55-ec-test.herokuapp.com/api/'
});

export const postReadings = (body) => {
  return request.post('/readings', body).then(({ data }) => {
    return data;
  });
};
export const getReadings = (sort_by, order) => {
  return request
    .get('/readings', { params: { sort_by, order } })
    .then(({ data }) => {
      return data.readings;
    });
};

export const getAccounts = (sort_by, order) => {
  return request
    .get('/accounts', { params: { sort_by, order } })
    .then(({ data }) => {
      return data.accounts;
    });
};

export const patchAccount = (input, account_id) => {
  return request.patch(`/accounts/${account_id}`, input).then(({ data }) => {
    return data.account;
  });
};
