export const ADD_USER = 'ADD_USER';

export const saveUserInfo = (value) => ({
  type: ADD_USER, payload: value,
});
