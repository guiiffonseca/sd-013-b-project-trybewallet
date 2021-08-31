export const INPUT_USER = 'INPUT_USER';

export const userLogin = (email) => ({
  type: INPUT_USER,
  payload: email,
});
