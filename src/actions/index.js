import fetchAPI from '../servises/api';

// Coloque aqui suas actions
export const GET_EMAIL = 'GET_EMAIL';
export const GET_WALLET = 'GET_WALLET';
export const GET_API = 'GET_API';

export const actionLogin = (email) => ({
  type: 'LOGIN',
  payload: {
    email,
  },
});

export const getEmail = (email) => ({
  type: GET_EMAIL,
  email,
});
export const getWallet = (payload) => ({
  type: GET_WALLET,
  payload,
});

export const getApi = (currencies) => ({
  type: GET_API,
  currencies,
});

export const getFetchApi = () => async (dispatch) => {
  try {
    const response = await fetchAPI();
    const Array = Object.entries(response)
      .filter((item) => item[0] !== 'USDT');
    dispatch(getApi(Array));
  } catch (error) {
    console.error(error);
  }
};
