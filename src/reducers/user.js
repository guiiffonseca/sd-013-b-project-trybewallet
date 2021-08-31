// Esse reducer será responsável por tratar as informações da pessoa usuária
export const INITIAL_STATE = {
  user: {
    email: '',
  },
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case INITIAL_STATE:
    return { ...state };
  default:
    return state;
  }
}
