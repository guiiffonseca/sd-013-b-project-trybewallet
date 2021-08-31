import React from 'react';

class FormWallet extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="despesa">
          Valor :
          <input type="number" name="despesa" id="despesa" />
        </label>

        <label htmlFor="descricao">
          Descrição :
          <input type="text" name="descricao" id="descricao" />
        </label>

        <label htmlFor="moeda">
          Moeda :
          <select name="moeda" id="moeda">
            <option>BRL</option>
          </select>
        </label>

        <label htmlFor="pagamento">
          Método de pagamento :
          <select name="pagamento" id="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="categoria">
          Tag :
          <select name="categoria" id="categoria">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Saúde</option>
          </select>
        </label>

        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}

export default FormWallet;
