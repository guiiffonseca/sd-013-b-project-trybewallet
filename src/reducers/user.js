// Esse reducer será responsável por tratar as informações da pessoa usuária
const UPDATE_USER = 'UPDATE_USER';

const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case UPDATE_USER:
    return ({ ...state, email: payload.email });
  default:
    return state;
  }
}

export default userReducer;
