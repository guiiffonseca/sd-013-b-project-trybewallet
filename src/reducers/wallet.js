// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ALL_ACTIONS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case ALL_ACTIONS.SET_CURRENCIES:
    return {
      ...state,
      currencies: payload,
    };
  case ALL_ACTIONS.SET_EXPENSES:
    return {
      ...state,
      expenses: payload,
    };
  default:
    return state;
  }
};

export default wallet;
