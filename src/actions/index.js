import apiFetchMoedas from '../ApiMoedas';
import ApifetchDespesas from '../ApiDespesas';

// Action userEmail:

export const USER_EMAIL = 'USER_EMAIL';

export const userEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});

// Action Moedas:

export const USER_MOEDA = 'USER_MOEDA';

export const userMoedas = (payload) => ({
  type: USER_MOEDA,
  payload,
});

export const fetchMoedas = () => async (dispatch) => {
  const data = await apiFetchMoedas();
  dispatch(userMoedas(data));
};

// Action despesas:

export const ADD_DESPESAS = 'ADD_DESPESAS';

export const addDespesas = (payload) => ({
  type: ADD_DESPESAS,
  payload,
});

export const fecthDespesas = (payload) => async (dispatch, getState) => {
  const { expenses } = getState().wallet;
  const exchangeRates = await ApifetchDespesas();
  dispatch(addDespesas({ ...payload, id: expenses.length, exchangeRates }));
};
