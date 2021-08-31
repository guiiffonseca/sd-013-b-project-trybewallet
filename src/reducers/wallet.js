// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { RESPONSE_API, RESPONSE_ERROR } from '../actions';

const initialState = {};

const user = (state = initialState, action) => {
  switch (action.type) {
  case RESPONSE_API:
    return { ...state, currencies: action.payload };
  case RESPONSE_ERROR:
    return { ...state, error: action.payload };
  default:
    return state;
  }
};

export default user;
