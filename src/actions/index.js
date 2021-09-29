export const ADD_USER = 'ADD_USER';
export const CURRENCY_DATA = 'CURRENCY_DATA';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const dataCurrency = (data) => ({
  type: CURRENCY_DATA,
  data,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export const deleteItem = (item) => ({
  type: DELETE_ITEM,
  item,
});

const exchangeAPI = async () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

export function fetchAPI() {
  return async (dispatch) => {
    const data = await exchangeAPI();
    dispatch(dataCurrency(data));
  };
}
