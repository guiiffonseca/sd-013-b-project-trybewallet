// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { SAVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

const expensesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default expensesReducer;
