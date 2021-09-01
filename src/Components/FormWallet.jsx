import React from 'react';

class FormWallet extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="number" name="valor" id="valor" />
        </label>

        <label htmlFor="descricao">
          Descrição:
          <input type="text" name="descricao" id="descricao" />
        </label>

        <label htmlFor="moeda">
          Moeda:
          <select aria-label="moeda" name="moeda" id="moeda" />
        </label>

        <label htmlFor="metodo">
          Método de pagamento:
          <select name="metodo" id="metodo">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartão de crédito">Cartão de Crédito</option>
            <option value="cartão de débito">Cartão de Débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option value="alimentacao">Alimentação</option>
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

export default FormWallet;
