// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CREATE_EXPENCE, WALLET_CURRENCY, DELETE_EXPENSE } from '../actions';

export const DEFAULT_WALLET_STATE = { currencies: [], expenses: [] };

function walletData(state = DEFAULT_WALLET_STATE, action) {
  switch (action.type) {
  case WALLET_CURRENCY:
    return { ...state, currencies: action.payload };
  case CREATE_EXPENCE:
    return { ...state, expenses: [...state.expenses, { ...action.payload }] };
  case DELETE_EXPENSE:
    return { ...state,
      expenses: [...state.expenses.slice(0, action.payload),
        ...state.expenses.slice(action.payload + 1, state.expenses.length)] };
  default:
    return state;
  }
}

export default walletData;
