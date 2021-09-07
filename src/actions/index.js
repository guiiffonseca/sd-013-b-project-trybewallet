// Coloque aqui suas actions
const ACTIONS = {
  SAVE_EMAIL: 'SAVE_EMAIL',
};

export const saveEmail = (email) => ({ type: ACTIONS.SAVE_EMAIL, email });

export default ACTIONS;
