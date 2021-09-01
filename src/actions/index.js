// Coloque aqui suas actions

export const LOADING = 'LOADING';
export const USER_LOGIN = 'USER_LOGIN';
export const FETCH_ERROR = 'FETCH_ERROR';
export const SAVE_COINS = 'SAVE_COINS';
export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const loading = () => ({
  type: LOADING,
});

export const userLogin = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

export const saveCoins = (currency) => ({
  type: SAVE_COINS,
  payload: { currency },
});

export const fetchError = (error) => ({
  type: FETCH_ERROR,
  payload: { error },
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const addExpenseThunk = (expense) => async (dispatch) => {
  dispatch(loading());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const exchangeRates = await response.json();
  dispatch(addExpense({ ...expense, exchangeRates }));
};

export const thunkAPI = (URL) => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await fetch(URL);
    const moedas = await response.json();
    // console.log(moedas);
    dispatch(saveCoins(moedas));
  } catch (error) {
    dispatch(fetchError(error));
  }
};
