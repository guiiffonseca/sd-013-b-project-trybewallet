import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            id="valor"
            type="text"
            name="value"
          />
        </label>
        <label htmlFor="valor">
          Descrição:
          <input type="text" name="name" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" name="name">
            <option>texto</option>
          </select>
        </label>
        <label htmlFor="moeda">
          Método de Pagamento:
          <select name="name" id="moeda">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="name" id="tag">
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
