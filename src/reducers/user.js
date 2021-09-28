import { SET_USERS } from '../actions/index';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_USERS:
    console.log(action.payload);
    return { ...state,
      email: action.payload };
  default:
    return state;
  }
};

export default reducer;
