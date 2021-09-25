import ACTIONS from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  currentCurrency: 'BRL',
  loadingCurrencies: false,
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ACTIONS.SELECTED_CURRENCY:
    return { ...state, currentCurrency: action.currentCurrency };
  case ACTIONS.REQUEST_CURRENCIES:
    return {
      ...state,
      currencies: [...Object.entries(action.currencies)],
      loadingCurrencies: true };
  case ACTIONS.ADD_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...action.expenses,
          id: state.expenses.length,
        },
      ],
    };
  case ACTIONS.DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  default:
    return state;
  }
}

export default userReducer;
