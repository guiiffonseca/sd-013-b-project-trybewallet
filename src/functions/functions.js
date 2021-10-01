const price = (expenses) => (
  expenses.map((expense) => (
    expense.value * expense[expense.currency].ask
  ))
);

const summation = (array) => (
  array.reduce((prev, next) => (prev + next), 0)
);

const roundCurrency = (value) => (
  Math.ceil(100 * value) / 100
);

export { price, summation, roundCurrency };
