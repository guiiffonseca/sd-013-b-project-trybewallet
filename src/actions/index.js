export const USER_LOGIN = 'USER_LOGIN';

export const login = (email) => ({
  type: USER_LOGIN,
  email,
});
