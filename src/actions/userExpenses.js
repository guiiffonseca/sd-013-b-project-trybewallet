export const EXPENSES = 'EXPENSES';
export const userExpenses = (expense) => ({
  type: EXPENSES,
  payload: { expense },
});
