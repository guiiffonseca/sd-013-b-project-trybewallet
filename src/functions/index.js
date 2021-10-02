const sum = (array) => (
  array.reduce((prev, next) => (prev + next), 0)
);

const price = (vector) => {
  let number = 0;
  vector.forEach(({ exchangeRates, currency, value }) => {
    const { ask } = exchangeRates[currency];
    number += Number(value) * Number(ask);
  });
  return Math.round(100 * number) / 100;
};

export { price, sum };
