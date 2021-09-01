// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SET_EXPENSE = 'SET_EXPENSE';

export const login = (email) => ({
  type: LOGIN,
  email,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  // currency é nome da key da API
  currencies,
});

export const setExpense = (expense) => ({
  type: SET_EXPENSE,
  expense,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const CURRENCY_LENGTH = 3;
  const currencies = Object.keys(data).filter(
    (currency) => currency.length <= CURRENCY_LENGTH,
  );
  dispatch(getCurrencies(currencies));
};

export const setExpenseThunk = (expense) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const finalExpense = {
    ...expense,
    exchangeRates: data,
  };
  dispatch(setExpense(finalExpense));
};
