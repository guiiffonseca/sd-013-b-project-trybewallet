import fetchAPI from '../services/fetchApi';

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

export const setAwesomeapi = (payload) => ({
  type: SET_AWESOMEAPI,
  payload,
});

export const setFetchAwesomeapi = (search) => async (dispatch) => {
  try {
    const results = await fetchAPI(search);
    const payload = {
      wallet: {
        currencies: results.currencies,
        expenses: results.expenses,
      },
    };
    dispatch(setAwesomeapi(payload));
  } catch (error) {
    console.error(error);
  }
};
