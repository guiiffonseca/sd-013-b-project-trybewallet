import { ADD_EXPENSES } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  expenses: [],
  id: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: state.expenses.length,
          ...action.payload.expenses,
        // ...state.expenses,
        // id: state.expenses.length,
        // ...action.payload.expenses,
        }],
    };
  default:
    return state;
  }
};

export default walletReducer;
