// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_CURRENCIES_SUCCESS,
  REMOVE_EXPENSE,
  SET_EXPENSE,
  EDIT_EXPENSE,
  FINISH_EDIT_EXPENSE } from '../actions';

const initialState = ({
  currencies: [],
  expenses: [],
  editExpense: [],
});

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case GET_CURRENCIES_SUCCESS:
    return ({
      ...state,
      currencies: action.currencies,
    });
  case SET_EXPENSE:
    return ({
      ...state,
      expenses: [...state.expenses, action.expense],
    });
  case REMOVE_EXPENSE:
    return ({
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.expense.id),
    });
  case EDIT_EXPENSE:
    return ({
      ...state,
      editExpense: state.expenses.filter((expense) => expense.id === action.expense.id),
    });
  case FINISH_EDIT_EXPENSE:
    return ({
      ...state,
      expenses: [...state.expenses.filter((expense) => expense.id !== action.expense.id),
        action.expense],
    });
  default:
    return state;
  }
};

export default wallet;
