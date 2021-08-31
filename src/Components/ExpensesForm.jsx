import React from 'react';

class ExpensesForm extends React.Component {
  render() {
    return (
      <form>
          <label htmlFor="Valor">
        Despesas:
          <input type="text" name="Valor" id="Valor" />
          </label>
          <label htmlFor="Descrição">
        Descrição:
          <input type="text" name="Descrição" id="Descrição" />
          </label>
          <label htmlFor="Moeda">
        Moeda:
          <select name="Moeda" id="Moeda" />
          </label>
          <label htmlFor="Método de pagamento">
        Método de pagamento:
          <select name="Método de pagamento" id="Método de pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
          </label>
          <label htmlFor="Tag">
          <select name="Tag" id="Tag">
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

export default ExpensesForm;
