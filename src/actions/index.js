export const USER_EMAIL = 'USER_EMAIL';

// login action
export const inputEmail = (email) => ({
  type: USER_EMAIL,
  payload: email,
});
