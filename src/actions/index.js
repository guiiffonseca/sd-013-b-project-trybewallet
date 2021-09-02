export const LOGIN = 'LOGIN';
export const CURRENCIES_REQUEST = 'CURRENCIES_REQUEST';
export const CURRENCIES_REQUEST_SUCCESS = 'CURRENCIES_REQUEST_SUCCESS';
export const CURRENCIES_REQUEST_ERROR = 'CURRENCIES_REQUEST_ERROR';

export const loginSubmit = (payload) => ({
  type: LOGIN,
  payload,
});

export const getCurrency = () => ({
  type: CURRENCIES_REQUEST,
});

export const getCurrencySuccess = (data) => ({
  type: CURRENCIES_REQUEST_SUCCESS,
  currencies: Object.keys(data),
});

export const getCurrencyFailure = () => ({
  type: CURRENCIES_REQUEST_ERROR,
});

export function currenciesFromApi() {
  return async (dispatch) => {
    try {
      dispatch(getCurrency());
      const categoriesURL = 'https://economia.awesomeapi.com.br/json/all';
      const fetchAPI = await fetch(categoriesURL);
      const data = await fetchAPI.json();
      delete data.USDT;
      dispatch(getCurrencySuccess(data));
    } catch (err) {
      console.error(err);
    }
  };
}
