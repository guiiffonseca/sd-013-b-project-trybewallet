// Coloque aqui suas actions
import currencyAPI from '../services/currencyAPI';

export const GET_USER_EMAIL = 'GET_USER_EMAIL';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
export const GET_CURRENCY_ERROR = 'GET_CURRENCY_ERROR';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const getUserEmail = (payload) => ({
  type: GET_USER_EMAIL,
  payload,
});

export const getCurrencySuccess = (payload) => ({
  type: GET_CURRENCY_SUCCESS,
  payload,
});

export const getCurrencyError = (payload) => ({
  type: GET_CURRENCY_ERROR,
  payload,
});

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

const fetchCurrency = () => async (dispatch) => {
  try {
    const response = await currencyAPI();
    const currencies = response;
    // ref: https://stackoverflow.com/questions/3455405/how-do-i-remove-a-key-from-a-javascript-object
    delete currencies.USDT;
    dispatch(getCurrencySuccess(currencies));
  } catch (error) {
    dispatch(getCurrencyError(error));
  }
};

export default fetchCurrency;
