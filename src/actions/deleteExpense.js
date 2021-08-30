export const DELETE_EXPENSE = 'DELETE_EXPENSE';

const deleteExpense = (id) => ({ type: DELETE_EXPENSE, id });

export default deleteExpense;
