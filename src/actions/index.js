export const USER_LOGIN = 'USER_LOGIN';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  email,
});

export const getCurrencies = (currencie) => ({
  type: ADD_CURRENCIES,
  currencie,
});

export const addExpenses = (data, payload) => (
  {
    type: ADD_EXPENSES,
    payload: { ...payload, exchangeRates: data },
  });

export const fetchCurrency = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  delete data.USDT;
  const currencies = Object.keys(data);
  dispatch(getCurrencies(currencies));
};

export const addExpense = (payload) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  delete data.USDT;
  dispatch(addExpenses(data, payload));
};
