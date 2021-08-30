import { GET_LOGIN_SUBMIT } from '../actions/index';

const initialState = {
  email: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case GET_LOGIN_SUBMIT:
    return { ...state, user: action.payload };
  default:
    return state;
  }
};

export default user;
