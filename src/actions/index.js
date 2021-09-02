import responseApi from '../service/data';

// Coloque aqui suas actions
const addValue = (type, value) => ({ type, email: value });
const addCurrency = (payload) => (
  { type: 'ALL_CURRENCY', currencies: Object.keys(payload) }
);

function fetchCurrency() {
  return (dispatch) => responseApi()
    .then((response) => dispatch(addCurrency(response)));
}

export { addValue, addCurrency, fetchCurrency };
