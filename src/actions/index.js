// Coloque aqui suas actions
export const GET_CURRENCY = 'GET_CURRENCY';
export const USER_EMAIL = 'USER_EMAIL';
export const ADD_EXPANSE = 'ADD_EXPANSE';

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
    data.USDT = undefined;
    const entries = Object.entries(data);
    dispatch(getCurrency(entries));
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
