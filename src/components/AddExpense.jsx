import React, { Component } from 'react';
// import Input from './Input';

class AddExpense extends Component {
  render() {
    return (
      <form>
        {/* <Input /> */}
        <label htmlFor="valor">
          valor
          <input
            type="text"
            name="valor"
            id="valor"
          />
        </label>
        <label htmlFor="Descrição">
          Descrição
          <textarea
            name="description"
            id="Descrição"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="moeda" id="moeda">
            <option value="">BRL</option>
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select name="method" id="method">
            <option value="D">Dinheiro</option>
            <option value="CDC">Cartão de crédito</option>
            <option value="CDD">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag
          <select name="categoria" id="categoria">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddExpense;
