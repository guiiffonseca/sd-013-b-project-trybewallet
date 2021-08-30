// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'STORE_LOG_IN':
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
}

export default user;
