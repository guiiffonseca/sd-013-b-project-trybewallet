// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import {
  GET_CURRENCIES,
  ADD_EXPENSES,
  REMOVE_ITEM,
  EDIT_FORM,
  EDIT_EXPENSE,
  SET_ID_TO_EDIT,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editForm: false,
  idToEdit: 0,
};

const walletReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: [payload.currencies],
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, {
        ...payload.expenses,
        id: state.expenses.length,
      }],
    };
    // **SOURCE https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-remove-an-item-from-an-array/301447 */
  case REMOVE_ITEM:
    return {
      ...state,
      expenses: [
        ...state.expenses.slice(0, payload.index),
        ...state.expenses.slice(payload.index + 1, state.expenses.length),
      ],
    };
  case EDIT_FORM:
    return {
      ...state,
      editForm: true,
    };
  case SET_ID_TO_EDIT:
    return {
      ...state,
      idToEdit: payload.id,
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.map((expense) => {
        if (expense.id === payload.editExpenses.id) return payload.editExpenses;
        return expense;
      }),
      editForm: false,
    };
  default:
    return state;
  }
};

export default walletReducer;
