import React from 'react';
/* import React */

class FormDespesas extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor-despesa">
          Valor
          <input
            type="text"
            id="valor-despesa"
            name="valor"
          />
        </label>

        <label htmlFor="descrição-despesa">
          Descrição Despesa
          <input
            type="text"
            id="descrição-despesa"
            name="descrição-despesa"
          />
        </label>

        <label htmlFor="moeda">
          Moeda
          <select name="moeda" id="moeda">
            <option name="moeda">Tipo de Moeda</option>
          </select>
        </label>

        <label htmlFor="selecionar-pagamento">
          Método de Pagamento
          <select name="pagamento" id="selecionar-pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="crédito">Cartão de crédito</option>
            <option value="débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="selecionar-tag">
          Tag
          <select name="pagamento" id="selecionar-tag">
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
export default FormDespesas;
