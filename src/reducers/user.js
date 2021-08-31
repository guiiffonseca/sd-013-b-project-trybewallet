// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SAVE_LOGIN':
    return {
      ...state,
      email: action.login,
    };
  default:
    return state;
  }
};

export default UserReducer;
