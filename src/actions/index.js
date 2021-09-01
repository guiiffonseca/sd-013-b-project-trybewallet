// Coloque aqui suas actions
export const SET_USEREMAIL = 'SET_USEREMAIL';
export const SET_DESPESAS = 'SET_DESPESAS';

export const setUseremail = (payload) => ({
  type: SET_USEREMAIL,
  payload,

});

export const setDespesas = (payload) => ({
  type: SET_DESPESAS,
  payload,

});
