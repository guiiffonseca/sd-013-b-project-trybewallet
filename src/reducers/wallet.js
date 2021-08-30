// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'BEGIN_FETCH':
    return {
      ...state,
      isFetching: true,
    };
  case 'ADD_EXPENSES':
    return {
      ...state,
      expenses: state.expenses.concat(action.payload.allExpenses),
      isFetching: false,
    };
  case 'SUCESS_FETCH':
    return {
      ...state,
      currencies: action.payload.currencies,
      isFetching: false,
    };
  case 'ERROR_FETCH':
    return {
      ...state,
      error: action.error,
      isFetching: false,
    };
  case 'DELETE_ITEM':
    return {
      ...state,
      /** Source: https://stackoverflow.com/questions/57519905/how-delete-item-from-redux-state */
      expenses: state.expenses.filter((item) => item.id !== action.id),
    };
  default:
    return state;
  }
};

export default wallet;
