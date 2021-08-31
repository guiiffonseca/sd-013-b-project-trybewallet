// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_WALLET:
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default wallet;
