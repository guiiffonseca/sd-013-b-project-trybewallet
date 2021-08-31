// Coloque aqui suas actions
// import currencyAPI from '../services/currencyAPI';

export const SET_EMAIL = 'SET_EMAIL';
export const SET_WALLET = 'SET_WALLET';
// export const GET_CURRENCY_API_SUCCESS = 'GET_CURRENCY_API_SUCCESS';
// export const GET_CURRENCY_API_ERROR = 'GET_CURRENCY_API_ERROR';

export const setEmail = (payload) => (
  {
    type: SET_EMAIL,
    payload,
  });

export const setWallet = (payload) => (
  {
    type: SET_WALLET,
    payload,
  });

// export const getCurrencyAPISuccess = (payload) => ({
//   type: GET_CURRENCY_API_SUCCESS,
//   payload,
// });

// export const getCurrencyAPIError = (payload) => ({
//   type: GET_CURRENCY_API_ERROR,
//   payload,
// });

// export const getCurrencyAPI = () => async (dispatch) => {
//   // action loading
//   try {
//     const response = await currencyAPI();
//     dispatch(response);
//   } catch (error) {
//     dispatch(response(error));
//   }
// };
// export const setPassword = () => (
//   {
//     type: SET_PASSWORD,
//   });
