const SET_EMAIL = 'SET_EMAIL';
const SET_EXPENSES = 'SET_EXPENSES';
const SET_CURRENCIES = 'SET_CURRENCIES';

export const ALL_ACTIONS = {
  SET_EMAIL,
  SET_EXPENSES,
  SET_CURRENCIES,
};

export const setEmail = (payload) => ({
  type: ALL_ACTIONS.SET_EMAIL,
  payload,
});

export const fetchCurrenciesAPI = () => async (dispatch) => {
  const urlAPI = 'https://economia.awesomeapi.com.br/json/all';
  const currenciesResponse = await (await fetch(urlAPI)).json();
  const currenciesNoUSDT = Object.entries(currenciesResponse)
    .filter((key) => key[0] !== 'USDT');
  const currenciesEdit = currenciesNoUSDT.map((i) => ({ [i[0]]: i[1] }));

  dispatch({
    type: ALL_ACTIONS.SET_CURRENCIES,
    payload: currenciesEdit,
  });
};

export const setExpenses = (payload) => ({
  type: ALL_ACTIONS.SET_EXPENSES,
  payload,
});
