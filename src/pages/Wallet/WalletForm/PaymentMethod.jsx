import React from 'react';
import PropTypes from 'prop-types';

class PaymentMethod extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="method">
        Método de Pagamento:
        <select
          id="method"
          form="transaction-data"
          name="method"
          onChange={ onChange }
          value={ value }
        >
          <option>Dinheiro</option>
          <option>Cartão de Crédito</option>
          <option>Cartão de Débito</option>
        </select>
      </label>
    );
  }
}

export default PaymentMethod;
