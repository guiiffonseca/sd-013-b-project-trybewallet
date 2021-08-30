import React, { Component } from 'react';

class PaymentMethodToAdd extends Component {
  render() {
    return (
      <label
        htmlFor="method"
      >
        Método de pagamento
        <select
          id="method"
          name="method"
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

export default PaymentMethodToAdd;
