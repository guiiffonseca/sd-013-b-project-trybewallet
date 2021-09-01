// Coloque aqui suas actions
// import getCurrencies from '../services/currencyAPI';
export const SET_USER = 'SET_USER';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const GET_CURRENCY_ERROR = 'GET_CURRENCY_ERROR';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';

export const getCurrencySuccess = (payload) => ({
  type: GET_CURRENCY_SUCCESS,
  payload,
});

export const getCurrencyError = (payload) => ({
  type: GET_CURRENCY_ERROR,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const getCurrencyThunk = () => async (dispatch) => {
  try {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(url);
    const result = await response.json();
    // const currencies = Object.values(result);
    delete result.USDT;
    dispatch(getCurrencySuccess(result));
  } catch (error) {
    dispatch(getCurrencyError(error));
  }
};

const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export default setUser;
