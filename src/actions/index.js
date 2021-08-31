// Coloque aqui suas actions
const LOGIN = 'LOGIN';
const GET_CURRENCIES = 'GET_CURRENCIES';
const ADD_EXPENSE = 'ADD_EXPENSE';

export default function Login(email) {
  return ({
    type: LOGIN,
    payload: {
      email,
    },
  });
}

export function fetchCurencies(data) {
  return ({
    type: GET_CURRENCIES,
    payload: {
      moedas: data,
    },
  });
}

export function addExpense(despesa) {
  return ({
    type: ADD_EXPENSE,
    payload: {
      despesa,
    },
  });
}
