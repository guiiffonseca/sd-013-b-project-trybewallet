// Coloque aqui suas actions
export const VALIDA_EMAIL = 'VALIDA_EMAIL';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const REQUEST_API = 'REQUEST_API';
export const GET_EXPENSES = 'GET_EXPENSES';

export const validaEmail = (email) => ({
  type: VALIDA_EMAIL,
  payload: email,
});

export const getExpenses = (payload) => ({
  type: GET_EXPENSES,
  payload,
});

export const requestApi = () => ({
  type: REQUEST_API,
});

export const currenciesSuccess = (currencies) => ({
  type: SET_CURRENCIES,
  payload: currencies,
});

const getApi = () => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export const getCurrencie = () => async (dispatch) => {
  try {
    dispatch(requestApi());
    const response = getApi();
    const currencies = await response;
    delete currencies.USDT;
    dispatch(currenciesSuccess(Object.keys(currencies)));
  } catch (err) { console.log(err, 'ola'); }
};

export const getAddExpense = (state) => async (dispatch) => {
  try {
    const response = await getApi();
    const exchangeRates = response;
    console.log(exchangeRates);
    dispatch(getExpenses({ ...state, exchangeRates }));
  } catch (err) {
    console.log(err);
  }
};
