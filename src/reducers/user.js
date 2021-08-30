// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  login: '',
  password: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'X':
    return ({ ...state, X: action.payload });
  default:
    return state;
  }
}

export default userReducer;
