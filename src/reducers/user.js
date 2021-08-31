// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',
};

const USER_EMAIL = 'USER_EMAIL';

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_EMAIL:
    return {};
  default:
    return state;
  }
};

export default user;
