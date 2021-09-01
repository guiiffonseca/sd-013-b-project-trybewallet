import { WALLET_INFO } from '../actions';


// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INICIAL_STATE = {
    currencies: [],
    expenses: []
};
function wallet(state = INICIAL_STATE, action) {
switch (action.type) {
  case WALLET_INFO:
    return {
      ...state,
      action,
    };
  default:
    return state;
}
}

export default wallet;
