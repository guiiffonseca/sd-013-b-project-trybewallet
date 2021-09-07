import responseApi from '../service/data';

// Coloque aqui suas actions
const addValue = (type, value) => ({ type, email: value });
const addCurrency = (payload) => (
  { type: 'ALL_CURRENCY', currencies: Object.keys(payload) }
);
const responseApiOk = () => ({ type: 'API_OK' });
const expenditure = (payload) => ({ type: 'ACTUAL_CURRENCY', expenditure: payload });
const totalExpenditure = (payload) => ({ type: 'TOTAL', totalExpenditure: payload || 0 });

function fetchCurrency() {
  return (dispatch) => {
    dispatch(responseApiOk());
    return responseApi()
      .then((response) => dispatch(addCurrency(response)));
  };
}

export { addValue, fetchCurrency, expenditure, totalExpenditure };
