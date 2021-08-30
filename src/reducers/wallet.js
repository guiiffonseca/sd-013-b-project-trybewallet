// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
  case SET_WALLET:
    return {
      ...state,
      currencies: payload.currencies,
      expenses: payload.expenses,
    };
  default:
    return state;
  }
}

export default wallet;
