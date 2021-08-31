// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SAVE_COINS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_COINS:
    return {
      ...state,
      currencies: action.payload.currency,
    };
  default:
    return state;
  }
};

export default wallet;
