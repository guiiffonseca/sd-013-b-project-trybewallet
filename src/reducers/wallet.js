// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import {
  FETCH_CURRENCIES,
  SET_CURRENCIES,
  SET_EXPENSE,
  REMOVE_EXPENSE,
} from '../actions/index';

const INIT_STATE = { currencies: [], expenses: [] };

const walletReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES:
    return {
      ...state,
    };
  case SET_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case SET_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { id: state.expenses.length, ...action.payload },
      ],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
