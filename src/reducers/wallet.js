// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIES } from '../actions/Index';

const ESTADO_INICIAL = {
  currencies: [],
};

const wallet = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case CURRENCIES:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
};

export default wallet;
