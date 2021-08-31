import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="Valor">
          Valor:
          <input type="text" id="valor" value="0.00" />
        </label>
        <label htmlFor="Descrição">
          Descrição:
          <input type="text" id="Descrição" value="Digite" />
        </label>
        <label htmlFor="Moeda">
          Moeda
          <select id="Moeda">
            <option value="BRL">BRL </option>
          </select>
        </label>
        <label htmlFor="Método de pagamento">
          Método de Pagamento:
          <select type="text" id="Método de pagamento">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Credito">Cartão de crédito</option>
            <option value="Débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag:
          <select type="text" id="Tag">
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

export default Form;
