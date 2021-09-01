import React, { Component } from 'react';

class FormDespesas extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" id="valor" name="valor" />
        </label>

        <label htmlFor="descrição">
          Descrição:
          <input type="text" id="descrição" name="descrição" />
        </label>

        <label htmlFor="moeda">
          Moeda:
          <select name="moeda" id="moeda">
            <option value="brl">vazio</option>
          </select>
        </label>

        <label htmlFor="pagamento">
          Método de pagamento:
          <select name="pagamento" id="pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de Crédito</option>
            <option value="debito">Cartão de Débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>

      </form>

    );
  }
}

export default FormDespesas;
