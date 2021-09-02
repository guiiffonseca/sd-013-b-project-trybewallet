// Coloque aqui suas actions
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const GET_COINS = 'GET_COINS';
export const REQUEST_API = 'REQUEST_API';
export const ADD_EXPENSES = 'ADD_EXPENSES';
const API_ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

export const submitLogin = (email) => ({
  type: SUBMIT_LOGIN,
  email,
});

export const requestApi = () => ({ type: REQUEST_API });

export const getCoin = (data) => ({
  type: GET_COINS,
  data,
});

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export function fetchApi() {
  return async (dispatch) => {
    dispatch(requestApi());
    try {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      const filterCoins = await Object.keys(data)
        .filter((coin) => coin !== 'USDT');
      dispatch(getCoin(filterCoins));
    } catch (error) {
      console.log(error);
    }
  };
}

export const fetchExpenses = (state) => async (dispatch) => {
  try {
    const response = await fetch(API_ENDPOINT);
    const exchangeRates = await response.json();
    dispatch(addExpenses({ ...state, exchangeRates }));
  } catch (error) {
    console.log(error);
  }
};
