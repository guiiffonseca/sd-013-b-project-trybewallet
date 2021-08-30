import React, { Component } from 'react';

class Formulario extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="number" id="valor" />
        </label>
        <label htmlFor="descricao">
          <br />
          Descrição
          <input type="text" id="descricao" />
        </label>

        <label htmlFor="moeda">
          <br />
          Moeda

          <select id="moeda">
            <option value="">  </option>
          </select>
        </label>

        <label htmlFor="metodo">
          <br />
          Método de pagamento

          <select id="metodo">
            <option value="money"> Dinheiro </option>
            <option value="credit"> Cartão de crédito </option>
            <option value="debit"> Cartão de Débito </option>
          </select>
        </label>

        <label htmlFor="tag">
          <br />
          Tag

          <select id="tag">
            <option value="alimentacao"> Alimentação </option>
            <option value="lazer"> Lazer </option>
            <option value="trabalho"> Trabalho </option>
            <option value="transporte"> Transporte </option>
            <option value="saude"> Saúde </option>
          </select>
        </label>

      </form>
    );
  }
}

export default Formulario;
