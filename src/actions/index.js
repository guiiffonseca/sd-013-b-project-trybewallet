// Coloque aqui suas actions
export const GET_CURRENCY = 'GET_CURRENCY';
export const USER_EMAIL = 'USER_EMAIL';
export const ADD_EXPANSE = 'ADD_EXPANSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const getEmail = (email) => ({
  type: USER_EMAIL,
  email,
});

export const getCurrency = (array) => ({
  type: GET_CURRENCY,
  array,
});

export const addExpense = (payload) => ({
  type: ADD_EXPANSE,
  payload,
});

export const fetchCurrencyThunk = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    const keys = Object.keys(data);
    dispatch(getCurrency(keys));
  } catch (err) {
    console.log(err);
  }
};

export const addExpenseThunk = (payload) => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await response.json();
    dispatch(addExpense({ ...payload, exchangeRates }));
  } catch (err) {
    console.log(err);
  }
};

export const removeExpense = (number, expenses) => {
  const newArray = expenses.filter((element) => element.id !== Number(number));
  console.log(typeof number);
  return {
    type: REMOVE_EXPENSE,
    newArray,
  };
};
