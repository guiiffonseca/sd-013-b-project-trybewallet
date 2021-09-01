// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EXPENSE } from '../actions';

const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_WALLET_STATE, action) {
  switch (action.type) {
  case EXPENSE:
    return { expenses: [...expenses, action.expense] };
  default:
    return state;
  }
}

export default wallet;
