import React from 'react';
import PropTypes from 'prop-types';

class PaymentMethods extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <label htmlFor="payment-method">
        Método de pagamento:
        <select id="payment-method" name="method" onChange={ onChange }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

PaymentMethods.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default PaymentMethods;
