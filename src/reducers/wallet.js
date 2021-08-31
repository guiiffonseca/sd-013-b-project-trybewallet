// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'USER_WALLET':
    return action.value;
  default:
    return state;
  }
};

export default walletReducer;
