const SET_EXPENSE = 'SET_EXPENSE';
const SET_CURRENCIES = 'SET_CURRENCIES';

export const setExpenseAction = (payload) => ({
  type: SET_EXPENSE, payload,
});

const setCurrencies = (payload) => ({
  type: SET_CURRENCIES, payload,
});

export const setCurrenciesActionThunk = () => async (dispatch) => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const moedas = await fetch(url);
  const response = await moedas.json();
  dispatch(setCurrencies(response));
};

export const setExchangeRatesThunk = (payload) => async (dispatch) => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const moedas = await fetch(url);
  const response = await moedas.json();
  payload.exchangeRates = { ...response };
  dispatch(setExpenseAction(payload));
};
