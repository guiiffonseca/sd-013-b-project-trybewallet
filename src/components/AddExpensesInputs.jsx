import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Select from './Select';

class AddExpensesInputs extends Component {
  render() {
    const { value, description, currency,
      payment, tag, currencies, handleChange } = this.props;
    return (
      <div>
        <Input
          label="Valor:"
          type="number"
          id="input-value"
          name="value"
          value={ value }
          onChange={ handleChange }
        />
        <Input
          label="Descrição:"
          id="input-description"
          type="text"
          name="description"
          value={ description }
          onChange={ handleChange }
        />
        <Select
          id="input-currency"
          onChange={ handleChange }
          value={ currency }
          label="Moeda:"
          name="currency"
          options={ currencies }
        />
        <Select
          id="input-payment"
          onChange={ handleChange }
          value={ payment }
          label="Método de pagamento:"
          name="payment"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
        />
        <Select
          id="input-tag"
          onChange={ handleChange }
          value={ tag }
          label="Tag:"
          name="tag"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
        />
      </div>
    );
  }
}

AddExpensesInputs.propTypes = {
  value: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  payment: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  currencies: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddExpensesInputs;
