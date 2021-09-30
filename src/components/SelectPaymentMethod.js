import React from 'react';
import PropTypes from 'prop-types';

const SelectPaymentMethod = ({ handleChange }) => (
  <label htmlFor="PaymentMethod">
    Método de pagamento
    <select name="paymentMethod" id="PaymentMethod" onChange={ handleChange }>
      <option>Dinheiro</option>
      <option>Cartão de crédito</option>
      <option>Cartão de débito</option>
    </select>
  </label>
);

SelectPaymentMethod.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default SelectPaymentMethod;
