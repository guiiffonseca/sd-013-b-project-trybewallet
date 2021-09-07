import React from 'react';

class Payment extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="metodo">
          Método de pagamento
          <select
            name="method"
            id="metodo"
          >
            Método de pagamento
            <option value="Dinheiro">Dinheiro</option>
            <option value="CartãoDeCrédito">Cartão de crédito</option>
            <option value="CartãoDeDébito">Cartão de débito</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Payment;
