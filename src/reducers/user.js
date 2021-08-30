// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {};

const user = (state = initialState, action) => {
  switch (action.type) {
  case 'USER_LOGIN':
    return action.value;
  default:
    return state;
  }
};

export default user;
