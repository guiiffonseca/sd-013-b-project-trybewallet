import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentMethodToAdd extends Component {
  render() {
    const { handleSelections } = this.props;

    return (
      <label
        htmlFor="method"
      >
        Método de pagamento
        <select
          id="method"
          name="method"
          onChange={ handleSelections }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

PaymentMethodToAdd.propTypes = {
  handleSelections: PropTypes.func.isRequired,
};

export default PaymentMethodToAdd;
