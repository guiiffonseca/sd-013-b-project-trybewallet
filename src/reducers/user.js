// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  root: {},
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'TEST':
    return {
      TEST: action.payload,
    };
  default:
    return state;
  }
};

export default user;
