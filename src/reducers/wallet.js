// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, LOAD_CURRENCIES } from '../actions';

/**
 * expenses: {
 *    valor:
 *    moeda:
 *    metodoPagamento:
 *    tag:
 *    descricao:
 * }
 */

const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_WALLET_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };
  case LOAD_CURRENCIES:
    return { ...state, currencies: action.currencies };
  default:
    return state;
  }
};

export default wallet;
