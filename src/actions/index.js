import { getDespesas } from '../Api';

// Coloque aqui suas actions

export const SET_USEREMAIL = 'SET_USEREMAIL';
export const SET_DESPESAS = 'SET_DESPESAS';
export const EXCLUIR_DESPESAS = 'EXCLUIR_DESPESAS';

export const setUseremail = (payload) => ({
  type: SET_USEREMAIL,
  payload,

});

export const setDespesas = (payload) => ({
  type: SET_DESPESAS,
  payload,

});

export const excluiDespesas = (payload) => ({
  type: EXCLUIR_DESPESAS,
  payload,

});

export const getDespesasThunk = (expenses) => async (dispatch) => {
  getDespesas().then((object) => {
    delete object.DOGE;
    delete object.USDT;
    expenses.exchangeRates = object;
    dispatch(setDespesas(expenses));
  });
};
