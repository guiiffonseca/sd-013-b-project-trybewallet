// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ACTIONS } from '../actions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function reducer(state = INICIAL_STATE, action) {
  switch (action.type) {
  case ACTIONS.GET_CURRENCIES:
    return { ...state, currencies: action.currencies };
  case ACTIONS.GET_EXPENSES:
    return { ...state, expenses: action.expenses };
  default:
    return state;
  }
}
