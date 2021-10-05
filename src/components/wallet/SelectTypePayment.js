import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectTypePayment extends Component {
  render() {
    const { payMet, onChange } = this.props;
    return (
      <form>
        <label htmlFor="wallet-type-payment">
          Método de pagamento
          <select
            name="method"
            value={ payMet }
            id="wallet-type-payment"
            onChange={ onChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>

          </select>
        </label>
      </form>
    );
  }
}

SelectTypePayment.propTypes = {
  payMet: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectTypePayment;
