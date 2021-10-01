// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ACTIONS } from '../actions';

const INICIAL_STATE = {
  email: '',
};

export default function reducer(state = INICIAL_STATE, action) {
  switch (action.type) {
  case ACTIONS.EMAIL:
    return { ...state, email: action.email };
  default:
    return state;
  }
}
