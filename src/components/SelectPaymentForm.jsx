import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectPaymentForm extends Component {
  render() {
    const { method, handleChange } = this.props;

    return (
      <label htmlFor="select-payment">
        Método de pagamento
        <select
          id="select-payment"
          name="method"
          value={ method }
          onChange={ handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SelectPaymentForm.propTypes = {
  method: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default SelectPaymentForm;
