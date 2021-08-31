// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_TYPE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_TYPE:
    return {
      currencies: action.payload.currencies,
    };
  default:
    return state;
  }
};

export default wallet;
