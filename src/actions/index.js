// Coloque aqui suas actions

const STORE_LOG_IN = 'STORE_LOG_IN';
const STORE_CURRENCYS = 'STORE_CURRENCYS';
const ADD_EXPENSE = 'ADD_EXPENSE';
const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const logInStore = (payload) => ({
  type: STORE_LOG_IN,
  payload,
});

export const actualCurrencys = (payload) => ({
  type: STORE_CURRENCYS,
  payload,
});

export const defineCurrencys = () => (dispatch) => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  return fetch(URL)
    .then((response) => response.json())
    .then((obj) => {
      const list = Object.keys(obj).map((currency) => ({ ...obj[currency] }))
        .filter((currency) => currency.codein !== 'BRLT');
      dispatch(actualCurrencys(list));
    });
};

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  payload: {
    id: Number(id),
  },
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const addExpenseCall = (payload) => (dispatch) => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  return fetch(URL)
    .then((response) => response.json())
    .then((obj) => {
      dispatch(addExpense({ ...payload, exchangeRates: obj }));
    });
};
