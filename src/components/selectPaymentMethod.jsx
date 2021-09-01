import React from 'react';

class SelectPaymentMethod extends React.Component {
  render() {
    return (
      <label htmlFor="payment-method">
        Método de pagamento
        <select name="payment-method" id="payment-method">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

export default SelectPaymentMethod;
