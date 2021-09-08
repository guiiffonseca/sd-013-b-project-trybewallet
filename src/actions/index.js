const LOGIN = 'LOGIN';
const GET_CURRENCIES = 'GET_CURRENCIES';
const ADD_EXPENSE = 'ADD_EXPENSE';
const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
const EDIT_BOOL = 'EDIT_BOOL';
const EDIT_EXPENSE = 'EDIT_EXPENSE';
const SAVE_EDITED_EXPENSE = 'SAVE_EDITED_EXPENSE';

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

export function removeExpense(index) {
  return ({
    type: REMOVE_EXPENSE,
    payload: {
      index,
    },
  });
}

export function editBool(option) {
  return ({
    type: EDIT_BOOL,
    payload: {
      option,
    },
  });
}

export function editExpense(expense) {
  return ({
    type: EDIT_EXPENSE,
    payload: {
      expenseObj: expense,
    },
  });
}

export function saveEditedExpense(id, edited) {
  return ({
    type: SAVE_EDITED_EXPENSE,
    payload: {
      id,
      edited,
    },
  });
}
