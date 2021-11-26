import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Method extends Component {
  render() {
    const { method, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="forma-pagamento">
          Método de pagamento:
          <select
            name="method"
            value={ method }
            onChange={ handleChange }
            id="forma-pagamento"
          >
            <option>Dinheiro</option>
            <option>Cartão de Crédito</option>
            <option>Cartão de Débito</option>
          </select>
        </label>
      </div>
    );
  }
}

Method.propTypes = {
  handleChange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
};
