// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCIE, ADD_EXPENSE } from '../actions';

const INICIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INICIAL_WALLET_STATE, action) => {
  switch (action.type) {
  case ADD_CURRENCIE:
    return {
      ...state,
      currencies: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
