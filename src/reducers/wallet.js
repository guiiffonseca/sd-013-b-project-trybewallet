// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import ACTIONS from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ACTIONS.SHOW_EXPENSES:
    return state.expenses;
  case ACTIONS.RECEIVED_CURRENCIES:
    return { ...state, currencies: action.currencies };
  default:
    return state;
  }
}

export default userReducer;
