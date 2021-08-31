// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_CURRENCY } from '../actions';

export const DEFAULT_WALLET_STATE = { currencies: [], expenses: [] };

function walletData(state = DEFAULT_WALLET_STATE, action) {
  switch (action.type) {
  case WALLET_CURRENCY:
    return { ...state, currencies: { ...action.payload } };
  default:
    return state;
  }
}

export default walletData;
