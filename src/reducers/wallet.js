// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE } from '../actions';

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
    return { expenses: [...expenses, action.expense] };
  default:
    return state;
  }
};

export default wallet;
