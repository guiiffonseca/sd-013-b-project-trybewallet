import React from 'react';

class SelectPaymentType extends React.Component {
  render() {
    return (
      <label htmlFor="input-payment-type">
        Método de pagamento:
        <select id="input-payment-type">
          <option name="cash" id="cash">
            Dinheiro
          </option>
          <option name="debit" id="debit">
            Cartão de Débito
          </option>
          <option name="credit" id="credit">
            Cartão de Crédito
          </option>
        </select>
      </label>
    );
  }
}

export default SelectPaymentType;
