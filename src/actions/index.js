// Coloque aqui suas actions
export const SET_EMAIL = 'SET_EMAIL';

export const SET_MOEDAS = 'SET_MOEDAS';
export const SET_MOEDAS_FAIL = 'SET_MOEDAS_FAIL';

const SET_LOADING_TRUE = 'SET_LOADING_TRUE';
const SET_LOADING_FALSE = 'SET_LOADING_FALSE';

const SET_MOEDAS_ARRAY = 'SET_MOEDAS_ARRAY';

const SET_EXPENSE = 'SET_EXPENSE';
const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const REQUEST_MOEDAS = 'REQUEST_MOEDAS';
export const SET_LOGGED = 'SET_LOGGED';
export const setEmail = (payload) => ({
  type: SET_EMAIL,
  payload,
});

export const setLoadingTrue = () => ({
  type: SET_LOADING_TRUE,
});

export const setLoadingFalse = () => ({
  type: SET_LOADING_FALSE,
});

export const setLogged = (payload) => ({
  type: SET_LOGGED,
  payload,
});

export const requestMoedas = () => ({
  type: REQUEST_MOEDAS,
});

export const setMoedasFail = (payload) => ({
  type: SET_MOEDAS_FAIL,
  error: payload,
});

export const setMoedas = (payload) => ({
  type: SET_MOEDAS,
  payload,
});

export const setMoedasArray = (payload) => ({
  type: SET_MOEDAS_ARRAY,
  payload,
});

export const setExpense = (payload) => ({
  type: SET_EXPENSE,
  payload,
});

export const removeExpense = (payload) => ({
  type: REMOVE_EXPENSE,
  payload,
});

export const fetchMoedas = () => async (dispatch) => {
  dispatch(setLoadingTrue());
  try {
    const apiUrl = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(apiUrl);
    const result = await response.json();
    delete result.USDT;
    dispatch(setMoedas(result));
    dispatch(setLoadingFalse());
    dispatch(setMoedasArray(Object.keys(result)));
  } catch (error) {
    dispatch(setMoedasFail(error));
    dispatch(setLoadingFalse());
  }
};
