// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_TYPE, EXPENSES_TYPE, EXPENSES_DELETE_TYPE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
  case WALLET_TYPE:
    return {
      ...state,
      currencies: payload.currencies,
    };
  case EXPENSES_TYPE:
    return {
      ...state,
      expenses: [...state.expenses, payload.expenses],
    };
  case EXPENSES_DELETE_TYPE:
    return {
      ...state,
      expenses: payload.expenses,
    };
  default:
    return state;
  }
};

export default wallet;
