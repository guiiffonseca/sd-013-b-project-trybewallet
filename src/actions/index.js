// Coloque aqui suas actions
export const VALIDA_EMAIL = 'VALIDA_EMAIL';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const REQUEST_API = 'REQUEST_API';

export const validaEmail = (email) => ({
  type: VALIDA_EMAIL,
  payload: email,
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
    console.log();
    dispatch(currenciesSuccess(Object.keys(currencies)));
  } catch (err) { console.log(err, 'ola'); }
};
