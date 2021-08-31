import React from 'react';
import PropTypes from 'prop-types';

export default class Selects extends React.Component {
  render() {
    const { currency, method, tag, handleChange, createOptions } = this.props;
    return (
      <div>
        <label htmlFor="moeda">
          Moeda
          <select
            value={ currency }
            name="currency"
            id="moeda"
            onChange={ handleChange }
          >
            { createOptions() }
          </select>
        </label>
        <label htmlFor="metodo-pagamento">
          Método de pagamento
          <select
            value={ method }
            name="method"
            id="metodo-pagamento"
            onChange={ handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag
          <select
            value={ tag }
            name="tag"
            id="categoria"
            onChange={ handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

Selects.propTypes = {
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  createOptions: PropTypes.func.isRequired,
};
