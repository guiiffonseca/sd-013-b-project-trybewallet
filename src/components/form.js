import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="field-valor">
          Valor
          <input id="field-valor" type="text" />
        </label>
        <label htmlFor="field-desc">
          Descrição
          <input id="field-desc" type="text" />
        </label>
        <label htmlFor="select-moeda">
          Moeda
          <select id="select-moeda">
            {/* <option value="BRL">BRL</option> */}
          </select>
        </label>
        <label htmlFor="select-payment">
          Método de pagamento
          <select id="select-payment">
            <option value="money">Dinheiro</option>
            <option value="cardCred">Cartão de crédito</option>
            <option value="cardDeb">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="select-tag">
          Tag
          <select id="select-tag">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
