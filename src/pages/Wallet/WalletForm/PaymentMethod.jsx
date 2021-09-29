import React from 'react';

class PaymentMethod extends React.Component {
  render() {
    return (
      <label htmlFor="payment-method">
        Método de Pagamento:
        <select
          id="payment-method"
          form="transaction-data"
          name="payment-method"
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
