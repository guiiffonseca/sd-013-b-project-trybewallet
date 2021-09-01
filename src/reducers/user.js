// Esse reducer será responsável por tratar as informações da pessoa usuária

import { VALUE_ALL, SAVE_LOGIN } from '../actions/actionsType';

const INITIAL_STATE = {
  email: '',
  valueAll: 0,
};

const UserReducer = (state = INITIAL_STATE, action) => {
  const abc = (Number(state.valueAll) + Number(action.payload));
  switch (action.type) {
  case SAVE_LOGIN:
    return {
      ...state,
      email: action.login,
    };
  case VALUE_ALL:
    return {
      ...state,
      valueAll: abc.toFixed(2),
    };
  default:
    return state;
  }
};

export default UserReducer;
