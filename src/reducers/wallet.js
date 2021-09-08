const ADD_EXPENSE = 'ADD_EXPENSE';
const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
const EDIT_EXPENSE = 'EDIT_EXPENSE';
const SAVE_EDITED_EXPENSE = 'SAVE_EDITED_EXPENSE';
let prev = '';
let temp = '';

const INITIAL_STATE = {
  expenses: [],
  edit: false,
  selected: '',
};

function walletReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, payload.despesa],
    };

  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((despesa) => despesa.id !== payload.index),
    };

  case EDIT_EXPENSE:
    return {
      ...state,
      selected: payload.expenseObj,
      edit: true,
    };

  case SAVE_EDITED_EXPENSE:
    prev = state.expenses.find((despesa) => despesa.id === payload.id);
    temp = [...state.expenses];
    temp[state.expenses.indexOf(prev)] = payload.edited;
    return {
      ...state,
      edit: false,
      expenses: temp,
    };

  default:
    return state;
  }
}

export default walletReducer;
