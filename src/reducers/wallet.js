// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSES, GET_CURRENCIES } from '../actions';

export const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, currencies: action.payload };
  case ADD_EXPENSES:
    return { ...state, expenses: [ ...state.expenses, action.payload ], };
  default:
    return state;
  }
}
