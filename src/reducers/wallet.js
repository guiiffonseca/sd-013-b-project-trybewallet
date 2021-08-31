// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCIES, ADD_EXPENSE, ADD_EXPENSES_TOTAL } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  expensesTotal: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload,
      ],
    };
  case ADD_EXPENSES_TOTAL:
    return {
      ...state,
      expensesTotal: state.expensesTotal + action.payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
