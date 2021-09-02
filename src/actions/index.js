// Coloque aqui suas actions
const USER_LOGIN = 'USER_LOGIN';
const USER_WALLET = 'USER_WALLET';
const RESQUEST_API = 'REQUEST_API';
const GET_INFO_API = 'GET_INFO_API';
const GET_INFO_API_ERROR_ = 'GET_INFO_API_ERROR';
const TOTAL_EXPENSE = 'TOTAL_EXPENSE';

export const loginAction = (value) => ({ type: USER_LOGIN, value });

export const walletAction = (value) => ({ type: USER_WALLET, value });

export const fetchApiAction = () => ({ type: RESQUEST_API });

export const getInfoApi = (value) => ({ type: GET_INFO_API, value });

export const getInfoApiError = (value) => ({ type: GET_INFO_API_ERROR_, value });

export const totalExpense = (value) => ({ type: TOTAL_EXPENSE, value });

export function fetchApi() {
  return (dispatch) => {
    dispatch(fetchApiAction());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((r) => r.json())
      .then((json) => dispatch(getInfoApi(json)))
      .catch((error) => dispatch(error));
  };
}
