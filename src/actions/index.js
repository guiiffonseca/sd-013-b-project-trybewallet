// Coloque aqui suas actions
export const LOGGED_INFO = 'LOGGED_INFO';
export const CURRENCY = 'CURRENCY';
export const LOADING = 'LOADING';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const logged = (email) => ({ type: LOGGED_INFO, email });

const loading = () => ({ type: LOADING });

const getCurrency = (currencies) => ({ type: CURRENCY, currencies });

export function fetchApi() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    delete result.USDT;
    dispatch(getCurrency(result));
    dispatch(loading());
  };
}

export const expense = (infos) => ({ type: ADD_EXPENSE, infos });
