// Esse reducer será responsável por tratar as informações da pessoa usuária

const ESTADO_INICIAL = {
  email: '',
};
function userReducer(state = ESTADO_INICIAL, action) {
  switch (action.type) {
  case 'CLICK_BUTTON_LOGIN':

    return {
      ...state,
      email: action.email,
    };

  default:
    return { state };
  }
}

export default userReducer;
