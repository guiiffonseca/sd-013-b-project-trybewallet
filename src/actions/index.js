import fetchAPI from '../services/index';

export const USER_EMAIL = 'USER_EMAIL';
export const REQUEST = 'REQUEST';

// login action
export const inputEmail = (email) => ({
  type: USER_EMAIL,
  payload: email,
});

// fetch action
export const request = (currencies) => ({
  type: REQUEST,
  payload: currencies,
});

export const fetchingCurrencies = () => (dispatch) => {
  fetchAPI().then((data) => {
    delete data.USDT;
    dispatch(request(Object.keys(data)));
  });
};
