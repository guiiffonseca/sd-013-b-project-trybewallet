// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_USER_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_USER_STATE, action) => {
  const { type } = action;
  switch (type) {
  case '':
    return state;
  default:
    return state;
  }
};

export default user;
