// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_WALLET_VALUE, GET_API_SUCCESS } from '../actions/index';

const initialState = {
  currencies: [],
  expenses: [],
  despesa: 0,
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case SET_WALLET_VALUE:
    return {
      ...state,
      expenses: action.payload.expenses,
      despesa: (action.payload.despesa || 0).toFixed(2),
    };
  case GET_API_SUCCESS:
    return {
      ...state,
      currencies: action.payload.currencies,
    };
  default:
    return state;
  }
};

export default wallet;
