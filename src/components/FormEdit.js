import React, { Component } from 'react';

export default class FormEdit extends Component {
  render() {
    return (
      <form>
        <label htmlFor="Valor">
          Valor
          { this.renderInput('number', 'value', 'Valor', this.handleChange) }
        </label>
        <label htmlFor="Descrição">
          Descrição
          { this.renderInput('text', 'description', 'Descrição', this.handleChange) }
        </label>
        <label htmlFor="Moeda">
          Moeda
          <select onChange={ this.handleChange } name="currency" id="Moeda">
            { arrayObjctCurrencies.map((currency, index) => (
              <option
                key={ index }
              >
                {currency.code}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="Método de pagamento">
          Método de pagamento
          <select onChange={ this.handleChange } name="method" id="Método de pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag
          <select onChange={ this.handleChange } name="tag" id="Tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}
