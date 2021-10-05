import { ADD_EXPENSES, DELETE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  id: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: state.expenses.length,
          ...action.payload.expenses,
        },
      ],
    };

  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload.id),
    };

  default:
    return state;
  }
};

export default wallet;
