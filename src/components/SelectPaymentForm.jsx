import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SelectPaymentForm extends Component {
  render() {
    const { selectPayment, handleChange } = this.props;

    return (
      <label htmlFor="select-payment">
        Método de pagamento
        <select
          id="select-payment"
          name="selectPayment"
          value={ selectPayment }
          onChange={ handleChange }
        >
          <option selected value="dinheiro">Dinheiro</option>
          <option value="credito">Cartão de crédito</option>
          <option value="debito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SelectPaymentForm.propTypes = {
  selectPayment: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default connect(null, null)(SelectPaymentForm);
