// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_WALLET, SET_AWESOMEAPI } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  const { type, currencies, expenses } = action;
  switch (type) {
  case SET_AWESOMEAPI:
    return {
      ...state,
      currencies,
    };
  case SET_WALLET:
    return {
      ...state,
      expenses,
    };
  default:
    return state;
  }
}
export default wallet;