// Coloque aqui suas actions
export const FAZER_LOGIN = 'FAZER_LOGIN';
export const GET_EXPENSES = 'GET_EXPENSES';
export const GET_DATA = 'GET_DATA';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const fazerLogin = (payload) => ({
  type: FAZER_LOGIN,
  payload,
});

export const getExpenses = (payload) => ({
  type: GET_EXPENSES,
  payload,
});

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});
