// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_EXPENSES_TOTAL = 'ADD_EXPENSES_TOTAL';
// user actions
export const login = (email) => ({
  type: LOGIN,
  payload: email,
});

// wallet actions
const receiveCurrencies = (currencies) => ({
  type: RECEIVE_CURRENCIES,
  payload: currencies,
});

const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

const addExpensesTotal = (convertedExpense) => ({
  type: ADD_EXPENSES_TOTAL,
  payload: convertedExpense,
});

export const getCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await response.json();
  delete currencies.USDT;
  const currenciesArray = Object.values(currencies).map(({ code }) => code);

  dispatch(receiveCurrencies(currenciesArray));
};

export const createExpense = (data) => async (dispatch, getState) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await response.json();
  delete currencies.USDT;

  const { wallet: { expenses } } = getState();
  let expense = {};

  if (expenses.length) {
    expense = {
      id: expenses[expenses.length - 1].id + 1,
      ...data,
      exchangeRates: currencies,
    };
  } else {
    expense = {
      id: 0,
      ...data,
      exchangeRates: currencies,
    };
  }

  const convertedExpense = parseFloat(
    expense.value * expense.exchangeRates[expense.currency].ask,
  );

  dispatch(addExpense(expense));
  dispatch(addExpensesTotal(convertedExpense));
};
