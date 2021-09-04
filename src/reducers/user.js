// Esse reducer será responsável por tratar as informações da pessoa usuária
const ESTADO_INICIAL = {
  email: '',
};

const user = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case 'FAZER_LOGIN':
    return {
      ...state,
      email: action.payload,
    };

  default:
    return state;
  }
};

export default user;
