import React from 'react';

class PaymentMethods extends React.Component {
  render() {
    return (
      <label htmlFor="payment-method">
        Método de pagamento:
        <select id="payment-method">
          <option value="cash">Dinheiro</option>
          <option value="credit-card">Cartão de crédito</option>
          <option value="debit-card">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

export default PaymentMethods;
