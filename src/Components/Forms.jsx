import React, { Component } from 'react';

export default class Forms extends Component {
  render() {
    return (
      <div>
        <label htmlFor="valor">
          Valor
          <input type="number" id="valor" />
        </label>
        <label htmlFor="despesa">
          Descrição
          <input type="text" id="despesa" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="moeda" id="moeda">
            <option value="moeda"> teste </option>
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select name="pagamento" id="pagamento">
            <option value="dinheiro"> Dinheiro </option>
            <option value="credito"> Cartão de crédito </option>
            <option value="debito"> Cartão de débito </option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option value="alimentacao"> Alimentação </option>
            <option value="lazer"> Lazer </option>
            <option value="trabalho"> Trabalho </option>
            <option value="transporte"> Transporte </option>
            <option value="saude"> Saúde </option>
          </select>
        </label>
      </div>
    );
  }
}
