// Coloque aqui suas actions
const actions = {
  UPDATE_USER: 'CHANGE_USER',
  ADD_EXPENSE: 'NEW_EXPENSE',
};

export const updateUser = (payload) => ({
  type: actions.UPDATE_USER,
  payload,
});

export const addExpense = (payload) => ({
  type: actions.ADD_EXPENSE,
  payload,
});

export default actions;
