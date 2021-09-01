export default (value) => Intl.NumberFormat(
  'en-US', { style: 'currency', currency: 'BRL' },
).format(value).replace('R$', '').replace('.00', '');
