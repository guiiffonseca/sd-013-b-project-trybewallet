import { getAPI } from '../services/moedasAPI';

// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const RESPONSE_API = 'RESPONSE_API';
export const RESPONSE_ERROR = 'RESPONSE_ERROR';

export const fazerLogin = (payload) => ({ type: LOGIN, payload });

export const actionSuccessAPI = (payload) => ({
  type: RESPONSE_API,
  payload,
});

export const actionErrorAPI = (payload) => ({
  type: RESPONSE_ERROR,
  payload,
});

export const actionFunctionThunk = () => async (dispatch) => {
  try {
    const response = await getAPI();
    const payload = response;
    const arrayPayload = Object.entries(payload);
    dispatch(actionSuccessAPI(arrayPayload));
  } catch (error) {
    dispatch(actionErrorAPI(error));
  }
};

// OBJ RETORNO API
// {
//   {
//     "USD": {
//       "code":"USD",
//       "codein":"BRL",
//       "name":"Dólar Comercial",
//       "high":"5.6689",
//       "low":"5.6071",
//       "varBid":"-0.0166",
//       "pctChange":"-0.29",
//       "bid":"5.6173",
//       "ask":"5.6183",
//       "timestamp":"1601476370",
//       "create_date":"2020-09-30 11:32:53"
//       },
//      ...
//   }
// }
