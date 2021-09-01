// Coloque aqui suas actions
const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
const GET_CURRENCIES_FAIL = 'GET_CURRENCIES_FAIL';

const ADD_EXPENSES = 'ADD_EXPENSES';
const REMOVE_EXPENSES = 'REMOVE_EXPENSES';

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

export const addExpensesAction = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const removeExpensesAction = (payload) => ({
  type: REMOVE_EXPENSES,
  payload,
});
