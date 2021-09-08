// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import actions from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case actions.RECEIVE_MOEDAS:
    return { ...state, currencies: action.payload };
  case actions.ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
}

export default wallet;
