// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  login: '',
  password: '',
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'X':
    return ({ ...state, X: action.payload });
  default:
    return state;
  }
}

export default walletReducer;
