export default (value) => Intl.NumberFormat(
  'en-US', { maximumFractionDigits: 2, useGrouping: false },
).format(value);
