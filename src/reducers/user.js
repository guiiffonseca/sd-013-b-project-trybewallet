import USER_INFO_ACTIONS from '../actions';

const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_INFO_ACTIONS.SET_INFO:
    return { ...state, email: action.payload };
  default:
    return state;
  }
}

export default userReducer;
