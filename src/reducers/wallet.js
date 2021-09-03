// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { RESPONSE_API, RESPONSE_ERROR, ADD_DESPESA, REMOVE_LIST } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case RESPONSE_API:
    return { ...state, currencies: action.payload };
  case RESPONSE_ERROR:
    return { ...state, error: action.payload };
  case ADD_DESPESA:
    return {
      ...state,
      expenses: [...state.expenses,
        { ...action.payload, exchangeRates: { ...action.fetch } }],
    };
  case REMOVE_LIST:
    return {
      ...state,
      expenses: [...state.expenses.filter((item) => item.id !== action.payload)] };
  default:
    return state;
  }
};

export default wallet;
