import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectPayment extends Component {
  render() {
    const { onchange, method } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select id="method" onChange={ onchange } value={ method }>
          <option value="Dinheiro"> Dinheiro </option>
          <option value="Cartão de crédito"> Cartão de crédito </option>
          <option value="Cartão de débito"> Cartão de débito </option>
        </select>
      </label>
    );
  }
}

export default SelectPayment;

SelectPayment.propTypes = {
  onchange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
};
