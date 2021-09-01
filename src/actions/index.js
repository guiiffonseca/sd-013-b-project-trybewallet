// Coloque aqui suas actions
const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
const GET_CURRENCIES_FAIL = 'GET_CURRENCIES_FAIL';

const ADD_EXPENSE = 'ADD_EXPENSE';
const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const updateUser = (state) => ({ type: 'UPDATE_USER', payload: state });

export const updateCurrenciesSuccess = (payload) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});

export const updateCurrenciesFail = (payload) => ({
  type: GET_CURRENCIES_FAIL,
  payload,
});

export const updateCurrenciesThunk = () => async (dispatch) => {
  try {
    const fetchCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
    const payload = await fetchCurrencies.json();
    dispatch(updateCurrenciesSuccess(payload));
  } catch (error) {
    dispatch(updateCurrenciesFail(error));
  }
};

export const addExpenseAction = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const removeExpenseAction = (payload) => ({
  type: REMOVE_EXPENSE,
  payload,
});
