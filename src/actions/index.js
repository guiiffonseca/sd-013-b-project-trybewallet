// Coloque aqui suas actions
const URL = 'https://economia.awesomeapi.com.br/json/all';
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

export const requestCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  payload: currencies,
});

export const saveExpense = (expense) => ({
  type: SAVE_EXPENSE,
  payload: expense,
});

export const requestCurrenciesApi = () => async (dispatch) => {
  const resolveApi = await fetch(URL);
  const currencies = Object.keys(await resolveApi.json());
  dispatch(requestCurrencies(currencies));
};

export const requestApi = (expenseData) => async (dispatch) => {
  const resolveApi = await fetch(URL);
  const currencies = await resolveApi.json();
  dispatch(saveExpense({ ...expenseData, exchangeRates: currencies }));
};

export const deleteExpense = (expenses, index) => ({
  type: DELETE_EXPENSE,
  payload: expenses.filter((element) => element !== expenses[index]),
});
