import { UPDATE_CURRENCY, ADD_EXPENSES } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_CURRENCY:
    return {
      ...state,
      currencies: [...action.payload],
    };

  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
