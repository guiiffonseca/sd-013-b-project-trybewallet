// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE) {
  return {
    email: state.email,
    password: state.password,
  };
}

export default user;
