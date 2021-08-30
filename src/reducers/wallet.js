// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  root: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'TEST':
    return {
      TEST: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
