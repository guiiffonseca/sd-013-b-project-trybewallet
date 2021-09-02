// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCY } from '../actions/index';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      wallet: {
        currencies: action.payload,
      },
    };
  default:
    return state;
  }
}

export default wallet;
