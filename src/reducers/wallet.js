// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const ADD_EXPENSE = 'ADD_EXPENSE';
const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

const INITIAL_STATE = {
  expenses: [],
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

  default:
    return state;
  }
}

export default walletReducer;
