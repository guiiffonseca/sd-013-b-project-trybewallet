import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="text" name="valor" id="valor" />
          </label>

          <label htmlFor="descrição">
            Descrição:
            <textarea name="descriçao" id="descrição" />
          </label>

          <label htmlFor="moeda">
            Moeda
            <select name="moeda" id="moeda">
              <option>BRL</option>
            </select>
          </label>

          <label htmlFor="forma-pagamento">
            Método de pagamento:
            <select name="forma-pagamento" id="forma-pagamento">
              <option>Dinheiro</option>
              <option>Cartão de Crédito</option>
              <option>Cartão de Débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag:
            <select name="tag" id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
