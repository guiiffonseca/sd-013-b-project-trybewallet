// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { RESPONSE_API, RESPONSE_ERROR, ADD_DESPESA } from '../actions';

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
  default:
    return state;
  }
};

export default wallet;
