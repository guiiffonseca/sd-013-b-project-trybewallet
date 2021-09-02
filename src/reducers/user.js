// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'qualquercoisa':
    return state;
  default:
    return state;
  }
}

export default user;
