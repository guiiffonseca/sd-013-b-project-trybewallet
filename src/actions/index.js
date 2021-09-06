// Coloque aqui suas actions
export const VALIDA_EMAIL = 'VALIDA_EMAIL';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const REQUEST_API = 'REQUEST_API';
export const GET_EXPENSES = 'GET_EXPENSES';

export const validaEmail = (email) => ({
  type: VALIDA_EMAIL,
  payload: email,
});

export const getExpenses = (expenses) => ({
  type: GET_EXPENSES,
  payload: expenses,
});

export const requestApi = () => ({
  type: REQUEST_API,
});

export const currenciesSuccess = (payload) => ({
  type: SET_CURRENCIES,
  payload,
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
    const response = await getApi();
    const currencies = Object.values(response);
    delete currencies.USDT;
    dispatch(currenciesSuccess(currencies));
  } catch (err) { console.log(err, 'ola'); }
};

export const getAddExpense = (state) => async (dispatch) => {
  try {
    const response = await getApi();
    const exchangeRates = Object.values(response);
    delete exchangeRates.USDT;
    dispatch(getExpenses({ ...state, exchangeRates }));
  } catch (err) {
    console.log(err);
  }
};
