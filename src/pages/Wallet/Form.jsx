import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form id="transaction-data">
        <label htmlFor="expenses">
          Valor:
          <input type="text" id="expenses" name="expenses" />
        </label>
        <br />
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" name="description" />
        </label>
        <br />
        <label htmlFor="currency">
          Moeda:
          <select id="currency" form="transaction-data" name="currency">
            <option>xablau</option>
          </select>
        </label>
        <br />
        <label htmlFor="payment-method">
          Método de Pagamento:
          <select id="payment-method" form="transaction-data" name="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de Crédito</option>
            <option>Cartão de Débito</option>
          </select>
        </label>
        <br />
        <label htmlFor="tag">
         Tag:
          <select id="tag" form="transaction-data" name="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
