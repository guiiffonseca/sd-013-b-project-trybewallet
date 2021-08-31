import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Select from './Select';

class AddExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: '',
      payment: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, payment, tag } = this.state;
    const { currencies } = this.props;
    const currenciesNameArray = currencies.map((item) => item.name);
    return (
      <form>
        <Input
          label="Valor:"
          type="number"
          id="input-value"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          label="Descrição:"
          id="input-description"
          type="text"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <Select
          id="input-currency"
          onChange={ this.handleChange }
          value={ currency }
          label="Moeda:"
          name="currency"
          options={ currenciesNameArray }
        />
        <Select
          id="input-payment"
          onChange={ this.handleChange }
          value={ payment }
          label="Método de pagamento:"
          name="payment"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
        />
        <Select
          id="input-tag"
          onChange={ this.handleChange }
          value={ tag }
          label="Tag:"
          name="tag"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
        />
      </form>
    );
  }
}

AddExpenses.propTypes = {
  currencies: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.shape({ }).isRequired,
    map: PropTypes.func,
  }).isRequired,
};

export default AddExpenses;
