import React from 'react';

class AddExpense extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" id="value" name="value-input" value onChange />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select name="currency-selector" id="currency">
            <option>teste</option>
          </select>
        </label>
        <label htmlFor="payment-method">
          Moeda:
          <select name="payment-selector" id="payment-method">
            <option>teste</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag-selector" id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" name="description-input" value onChange />
        </label>
      </form>
    );
  }
}

export default AddExpense;
