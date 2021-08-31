import React from 'react';
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
    const currencyOptions = [];
    const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
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
          options={ currencyOptions }
        />
        <Select
          id="input-payment"
          onChange={ this.handleChange }
          value={ payment }
          label="Método de pagamento:"
          name="payment"
          options={ paymentOptions }
        />
        <Select
          id="input-tag"
          onChange={ this.handleChange }
          value={ tag }
          label="Tag:"
          name="tag"
          options={ tagOptions }
        />
      </form>
    );
  }
}

export default AddExpenses;
