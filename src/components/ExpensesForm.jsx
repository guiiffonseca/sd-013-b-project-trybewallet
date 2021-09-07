import React from 'react';
import Input from './Input';
import Select from './Select';

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: '',
      description: '',
      currency: 'BRL',
    };
  }

  handleOnChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { expenses, description, currency } = this.state;
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <Input
          type="text"
          label="Valor"
          name="expenses"
          id={ expenses }
          onChange={ this.handleOnChange }
        />
        <Input
          type="text"
          label="Descrição"
          name="description"
          id={ description }
          onChange={ this.handleOnChange }
        />
        <Select
          label="Moeda"
          name="currency"
        //   options={ currency }
          value={ currency }
          onChange={ this.handleOnChange }
        />
        <Select
          label="Método de Pagamento"
          name="paymentMethod"
          options={ paymentMethods }
          value={ paymentMethods }
          onChange={ this.handleOnChange }
        />
        <Select
          label="Tag"
          name="tag"
          options={ category }
          value={ category }
          onChange={ this.handleOnChange }
        />
      </form>
    );
  }
}

export default ExpensesForm;
