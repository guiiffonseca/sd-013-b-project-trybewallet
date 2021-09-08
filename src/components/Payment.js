import PropTypes from 'prop-types';
import React from 'react';

class Payment extends React.Component {
  render() {
    const { onChange, method } = this.props;
    return (

      <label htmlFor="method">
        Método de pagamento
        <select
          name="method"
          id="method"
          onChange={ onChange }
          value={ method }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>

    );
  }
}

Payment.propTypes = {
  method: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Payment;
