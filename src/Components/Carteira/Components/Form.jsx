import React from 'react';
import PropTypes from 'prop-types';

export default function Form({ coins, handlerChange }) {
  return (
    <form>
      <label htmlFor="valor">
        Valor:
        <input onChange={ handlerChange } id="valor" type="text" name="value" />
      </label>
      <label htmlFor="describe">
        Descrição:
        <input onChange={ handlerChange } type="text" id="describe" name="description" />
      </label>
      <label htmlFor="coin">
        Moeda:
        <select onChange={ handlerChange } name="currency" id="coin">
          {
            coins.map((coin) => (
              <option value={ coin.key } key={ coin.key }>
                {coin.code}
              </option>
            ))
          }
        </select>
      </label>
      <label htmlFor="pagamento">
        Método de Pagamento
        <select onChange={ handlerChange } name="method" id="pagamento">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="tag">
        Tag:
        <select onChange={ handlerChange } name="tag" id="tag">
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

Form.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.object).isRequired,
  handlerChange: PropTypes.func.isRequired,
};
