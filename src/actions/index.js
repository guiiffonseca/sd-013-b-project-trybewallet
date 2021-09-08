export const ACTIONS = {
  LOGIN: 'login',
  CURRENCIES: 'currencies',
  EXPENSES: 'expenses',
};

export const setEmail = (email) => ({ type: ACTIONS.LOGIN, payload: email });

const getCurrencies = (currencies) => ({
  type: ACTIONS.CURRENCIES,
  payload: currencies,
});

export const addExpenses = (expenses) => ({ type: ACTIONS.EXPENSES, payload: expenses });

export const getCurrenciesThunk = () => async (dispatch) => {
  const codeLength = 3;
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();

  const currencies = Object.keys(data).filter((code) => code.length === codeLength);

  dispatch(getCurrencies(currencies));
};

export const addExpensesThunk = (expenses) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();

  expenses.exchangeRates = data;

  dispatch(addExpenses(expenses));
};
