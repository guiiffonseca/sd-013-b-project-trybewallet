import { fetchCurrencies } from '../utils';

// action types
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';

// action creators
export const saveEmailAction = (payload) => ({ type: SAVE_EMAIL, payload });

// Essa action é para mudar o estado do isLoading para true, ou seja, está sendo feita a requisição a api
export const getCurrenciesAction = () => ({
  type: GET_CURRENCIES,
});

export const getCurrenciesSuccessAction = (payload) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});

export const getCurrenciesErrorAction = (payload) => ({
  type: GET_CURRENCIES_ERROR,
  payload,
});

export const fetchAwesomeAPI = () => async (dispatch) => {
  try {
    dispatch(getCurrenciesAction());
    const response = await fetchCurrencies();
    dispatch(getCurrenciesSuccessAction(response));
  } catch (error) {
    dispatch(getCurrenciesErrorAction(error));
  }
};

export default fetchAwesomeAPI;
