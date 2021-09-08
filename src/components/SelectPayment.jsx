import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectPayment extends Component {
  render() {
    const { onchange } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select id="method" onChange={ onchange }>
          <option> Dinheiro </option>
          <option> Cartão de Crédito </option>
          <option> Cartão de débito </option>
        </select>
      </label>
    );
  }
}

export default SelectPayment;

SelectPayment.propTypes = {
  onchange: PropTypes.func.isRequired,
};
