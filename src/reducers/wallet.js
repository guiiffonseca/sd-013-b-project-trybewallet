// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_WALLET, GET_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  const { type, currencies, expenses } = action;
  switch (type) {
  case GET_API:
    return {
      ...state,
      currencies,
    };
  case GET_WALLET:
    return {
      ...state,
      expenses,
    };
  default:
    return state;
  }
}
export default wallet;
