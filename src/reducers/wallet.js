// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CREATE_EXPENCE, WALLET_CURRENCY } from '../actions';

export const DEFAULT_WALLET_STATE = { currencies: [], expenses: [] };

function walletData(state = DEFAULT_WALLET_STATE, action) {
  switch (action.type) {
  case WALLET_CURRENCY:
    return { ...state, currencies: { ...action.payload } };
  case CREATE_EXPENCE:
    return { ...state, expenses: [...state.expenses, { ...action.payload }] };
  default:
    return state;
  }
}

export default walletData;
