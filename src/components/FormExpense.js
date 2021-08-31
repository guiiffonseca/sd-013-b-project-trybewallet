import React, { Component } from 'react';

class FormExpense extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="number" name="valor" id="valor" />
        </label>
        <label htmlFor="describe">
          Descrição
          <input type="text" name="describe" id="describe" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="moeda" id="moeda">
            moedas
          </select>
        </label>
        <label htmlFor="metodo-pagamento">
          Método de pagamento
          <select name="metodo-pagamento" id="metodo-pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag
          <select name="categoria" id="categoria">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default FormExpense;
