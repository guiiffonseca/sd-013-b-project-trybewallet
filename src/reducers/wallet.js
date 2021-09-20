// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import ACTIONS from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  currentCurrency: 'BRL',
  loadingCurrencies: false,
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ACTIONS.SHOW_EXPENSES:
    return state.expenses;
  case ACTIONS.SELECTED_CURRENCY:
    return { ...state, currentCurrency: action.currentCurrency };
  case ACTIONS.RECEIVED_CURRENCIES:
    return {
      ...state,
      currencies: [...Object.entries(action.currencies)],
      loadingCurrencies: true };
  default:
    return state;
  }
}

export default userReducer;
