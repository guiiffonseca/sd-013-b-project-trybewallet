const SET_EMAIL = 'SET_EMAIL';
const SET_EXPENSES = 'SET_EXPENSES';
const SET_CURRENCIES = 'SET_CURRENCIES';
const SET_VALUE = 'SET_VALUE';
const SET_DESCRIPTION = 'SET_DESCRIPTION';
const SET_CURRENCY = 'SET_CURRENCY';
const SET_PAYMENT = 'SET_PAYMENT';
const SET_TAG = 'SET_TAG';
const SET_EXCHANGERATES = 'SET_EXCHANGERATES';

export const ALL_ACTIONS = {
  SET_EMAIL,
  SET_EXPENSES,
  SET_CURRENCIES,
  SET_VALUE,
  SET_DESCRIPTION,
  SET_CURRENCY,
  SET_PAYMENT,
  SET_TAG,
  SET_EXCHANGERATES,
};

export const setEmail = (payload) => ({
  type: ALL_ACTIONS.SET_EMAIL,
  payload,
});

export const setExpenses = (payload) => ({
  type: ALL_ACTIONS.SET_EXPENSES,
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

export const setValue = (payload) => ({
  type: ALL_ACTIONS.SET_VALUE,
  payload,
});

export const setDescripton = (payload) => ({
  type: ALL_ACTIONS.SET_DESCRIPTION,
  payload,
});

export const setCurrency = (payload) => ({
  type: ALL_ACTIONS.SET_CURRENCY,
  payload,
});

export const setPayment = (payload) => ({
  type: ALL_ACTIONS.SET_PAYMENT,
  payload,
});

export const setTag = (payload) => ({
  type: ALL_ACTIONS.SET_TAG,
  payload,
});

export const setExchangerates = () => async (dispatch) => {
  const urlAPI = 'https://economia.awesomeapi.com.br/json/all';
  const currenciesResponse = await (await fetch(urlAPI)).json();
  // https://stackoverflow.com/questions/3455405/how-do-i-remove-a-key-from-a-javascript-object
  delete currenciesResponse.USDT;
  dispatch({
    type: ALL_ACTIONS.SET_EXCHANGERATES,
    payload: currenciesResponse,
  });
};
