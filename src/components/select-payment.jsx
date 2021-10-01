import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectPayment extends Component {
  render() {
    const { method, onChange } = this.props;

    return (
      <label htmlFor="method">
        Método de pagamento:
        {' '}
        <select
          id="method"
          className="expensives-form-long-inputs"
          name="method"
          value={ method }
          onChange={ onChange }
        >
          <option value="">Selecione</option>
          <option value="dinheiro">Dinheiro</option>
          <option value="cartao-debito">Cartão de débito</option>
          <option value="cartao-credito">Cartão de crédito</option>
        </select>
      </label>
    );
  }
}

SelectPayment.propTypes = ({
  handleChange: PropTypes.func,
}).isRequired;

export default SelectPayment;
