import fetchAPI from '../services/fetchApi';

// Coloque aqui suas actions
export const GET_EMAIL = 'GET_EMAIL';
export const GET_WALLET = 'GET_WALLET';
export const GET_AWESOMEAPI = 'GET_AWESOMEAPI';

export const getEmail = (payload) => ({
  type: GET_EMAIL,
  payload,
});

export const getWallet = (payload) => ({
  type: GET_WALLET,
  payload,
});

export const getAwesomeapi = (payload) => ({
  type: GET_AWESOMEAPI,
  payload,
});

export const getFetchAwesomeapi = (search) => async (dispatch) => {
  try {
    const results = await fetchAPI(search);
    const payload = {
      wallet: {
        currencies: results.currencies,
        expenses: results.expenses,
      },
    };
    dispatch(getAwesomeapi(payload));
  } catch (error) {
    console.error(error);
  }
};
