import React, { Component } from 'react';
import Input from '../Input';
import Select from '../Select';

const optionsPaymentMethod = [
  { money: 'Dinheiro' },
  { creditCard: 'Cartão de crédito' },
  { debitCard: 'Cartão de débito' },
];

const categoryOptions = [
  { food: 'Alimentação' },
  { leisure: 'Lazer' },
  { work: 'Trabalho' },
  { transport: 'Transporte' },
  { cheers: 'Saúde' },
];

class FormAddExpenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: '',
      paymentMethod: '',
      category: '',
    };
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, description, currency, paymentMethod, category } = this.state;
    return (
      <form>
        <Input
          labelText="Valor"
          type="text"
          name="value"
          id="value"
          value={ value }
          onChange={ this.handleChanges }
        />
        <Input
          labelText="Descrição"
          type="text"
          name="description"
          id="description"
          value={ description }
          onChange={ this.handleChanges }
        />
        <Select
          labelText="Moeda"
          value={ currency }
          name="currency"
          id="currency"
          onChange={ this.handleChanges }
          options={ [{ test: 'test' }] }
        />
        <Select
          labelText="Método de pagamento"
          value={ paymentMethod }
          name="paymentMethod"
          id="paymentMethod"
          onChange={ this.handleChanges }
          options={ optionsPaymentMethod }
        />
        <Select
          labelText="Tag"
          value={ category }
          name="category"
          id="category"
          onChange={ this.handleChanges }
          options={ categoryOptions }
        />
      </form>
    );
  }
}

export default FormAddExpenses;
