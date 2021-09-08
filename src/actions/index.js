const API = 'https://economia.awesomeapi.com.br/json/all';

const actions = {
  LOGIN_EMAIL: 'LOGIN_EMAIL',
  RECEIVE_MOEDAS: 'RECEIVE_MOEDAS',
  ADD_EXPENSE: 'ADD_EXPENSE',
};

export const loginEmail = (payload) => ({
  type: actions.LOGIN_EMAIL,
  payload,
});

export const addExpense = (payload) => ({
  type: actions.ADD_EXPENSE,
  payload,
});

export const receiveMoedas = (payload) => ({
  type: actions.RECEIVE_MOEDAS,
  payload });

export function fetchMoedas() {
  return async (dispatch) => {
    // const response = await fetch(API);
    // dispatch(requestMoedas());
    fetch(API)
      .then((response) => response.json())
      .then((moedas) => {
        const max = 3;
        dispatch(receiveMoedas(Object.keys(moedas)
          .filter((moeda) => moeda.length === max)));
      });
  };
}

export default actions;
