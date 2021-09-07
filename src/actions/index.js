export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const userLogin = (email) => ({
  type: LOGIN,
  user: {
    email,
  },
});

export const addNewExp = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export const fetchExpense = (expense) => async (dispatch) => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const fetchAPI = await fetch(URL);
  const parseJSON = await fetchAPI.json();

  dispatch(addNewExp({
    ...expense,
    exchangeRates: parseJSON,
  }));
};
