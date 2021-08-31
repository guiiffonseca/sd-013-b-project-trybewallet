// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_WALLET_VALUE } from '../actions/index';

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case SET_WALLET_VALUE:
    return { ...state, wallet: action.payload };
  default:
    return state;
  }
};

export default wallet;
