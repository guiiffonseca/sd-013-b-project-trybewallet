const price = (expense) => (
  expense.value * expense[expense.currency].ask
);

const sum = (array) => (
  array.reduce((prev, next) => (prev + next), 0)
);

const roundCurrency = (value) => (
  Math.round(100 * value) / 100
);

export { price, sum, roundCurrency };
