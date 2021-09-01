export const USER_LOGIN = 'USER_LOGIN';
export const NEW_EXPENSE = 'NEW_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  user: {
    email,
  },
});

export const addNewExpense = (expense) => ({
  type: NEW_EXPENSE,
  expense,
});

export const dispatchApi = (expense) => async (dispatch) => {
  const url = 'https://economia.awesomeapi.com.br/json/all';

  const fetchApi = await fetch(url);
  const getJson = await fetchApi.json();

  dispatch(addNewExpense({
    ...expense,
    exchangeRates: getJson,
  }));
};

export const deleteExpense = (Delete) => ({
  type: DELETE_EXPENSE,
  Delete,
});
