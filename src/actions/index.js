import searchAPI from '../services/fetchApi';

// Coloque aqui suas actions
export const SET_EMAIL = 'GET_EMAIL';
export const SET_WALLET = 'GET_WALLET';
export const SET_AWESOMEAPI = 'GET_AWESOMEAPI';

export const setEmail = (email) => ({
  type: SET_EMAIL,
  email,
});

export const setWallet = (payload) => ({
  type: SET_WALLET,
  payload,
});

export const setAwesomeapi = (currencies) => ({
  type: SET_AWESOMEAPI,
  currencies,
});

export const setFetchAwesomeapi = () => async (dispatch) => {
  try {
    const response = await searchAPI();
    const dataArray = Object.entries(response)
      .filter((item) => item[0] !== 'USDT');
    dispatch(setAwesomeapi(dataArray));
  } catch (error) {
    console.error(error);
  }
};
