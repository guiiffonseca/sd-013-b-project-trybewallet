import getCurrencies from '../services/currenciesAPI';

export const SET_LOGIN_VALUE = 'SET_LOGIN_VALUE';
export const SET_WALLET_VALUE = 'SET_WALLET_VALUE';
export const GET_API_SUCCESS = 'GET_API_SUCCESS';

export const setLoginValue = (payload) => ({
  type: SET_LOGIN_VALUE, payload,
});

export const setWalletValue = (payload) => ({
  type: SET_WALLET_VALUE, payload,
});

export const getApiSuccess = (payload) => ({
  type: GET_API_SUCCESS, payload,
});

export const getApiThunk = () => async (dispatch) => {
  const response = await getCurrencies();
  delete response.USDT;
  const payload = {
    currencies: response,
  };
  dispatch(getApiSuccess(payload));
};
