import { getAPI } from '../services/moedasAPI';

// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const RESPONSE_API = 'RESPONSE_API';
export const RESPONSE_API2 = 'RESPONSE_API2';
export const RESPONSE_ERROR = 'RESPONSE_ERROR';
export const ADD_DESPESA = 'ADD_DESPESA';

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

export const ActionAddDespesa = (payload, fetch) => ({
  type: ADD_DESPESA,
  payload,
  fetch,
});

export const actionFunctionThunk2 = (state) => async (dispatch) => {
  try {
    const response = await getAPI();
    const payload = response;
    // const arrayPayload = Object.entries(payload);
    dispatch(ActionAddDespesa(state, payload));
  } catch (error) {
    dispatch(actionErrorAPI(error));
  }
};
