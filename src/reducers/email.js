/* // As actions não realizam nenhuma alteração no estado global, por isso,
 deve-se utilizar os Reducers para salvar qualquer informação no State. */

const ESTADO_INICIAL_EMAIL = {
  emailUser: '',
};

const reducerEmailValid = (state = ESTADO_INICIAL_EMAIL, action) => {
  switch (action.type) {
  case 'EMAIL_USER':
    return {
      ...state,
      emailUser: action.payload.emailUser,
    };
  default:
    return state;
  }
};
export default reducerEmailValid;
