import fetchEconomyApi from '../services/index';

const actions = {
  GET_EMAIL: 'GET_EMAIL',
  REQUEST_API: 'REQUEST_API',
  CURRENCIES: 'CURRENCIES',
  FAILED_REQUEST: 'FAILED_REQUEST',
};

export const requestApi = () => ({
  type: actions.REQUEST_API,
});

export const failedRequest = (error) => ({
  type: actions.FAILED_REQUEST, payload: error,
});

export const getCurrencies = (payload) => ({
  type: actions.CURRENCIES, payload,
});

export const getEmail = (payload) => ({
  type: actions.GET_EMAIL, payload,
});

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(requestApi());

  try {
    const currencies = await fetchEconomyApi();
    dispatch(getCurrencies(currencies));
  } catch (error) {
    dispatch(failedRequest(error.message));
  }
};

export default actions;
