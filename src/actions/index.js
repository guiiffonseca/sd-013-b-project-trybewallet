import fetchAPI from '../servises/api';

// Coloque aqui suas actions
export const GET_EMAIL = 'GET_EMAIL';
export const GET_WALLET = 'GET_WALLET';
export const GET_AWESOMEAPI = 'GET_API';

export const getEmail = (email) => ({
  type: GET_EMAIL,
  email,
});
export const getWallet = (payload) => ({
  type: GET_WALLET,
  payload,
});

export const getApi = (currency) => ({
  type: GET_AWESOMEAPI,
  currency,
});

export const getFetchApi = () => async (dispatch) => {
  try {
    const response = await fetchAPI();
    const dataArray = Object.entries(response)
      .filter((item) => item[0] !== 'USDT');
    dispatch(getApi(dataArray));
  } catch (error) {
    console.error(error);
  }
};
/* const loginAction = (email) => ({
  type: 'LOGIN',
  payload: {
    email,
  },
}); */

export default actionLogin;
