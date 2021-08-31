// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SEND_EXPENSES = 'SEND_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const loginAction = (email) => ({
  type: USER_LOGIN,
  email,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export const fetchCurrencies = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    dispatch(getCurrencies(data));
  } catch (error) {
    console.log('error');
  }
};

export const sendExpenses = (expense, exchangeRates) => ({
  type: SEND_EXPENSES,
  expense,
  exchangeRates,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

export const fetchExpenses = (state) => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await response.json();
    const dataExchange = { exchangeRates };
    dispatch(sendExpenses(state, dataExchange));
  } catch (error) {
    console.log('error');
  }
};

export default loginAction;
