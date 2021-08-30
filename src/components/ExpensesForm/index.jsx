import React from 'react';
// import PropTypes from 'prop-types';

import FormHandler from '../FormHandler';

const PAYMENT_METHODS = {
  money: 'Dinheiro',
  credit: 'Cartão de crédito',
  debit: 'Cartão de débito',
};

const TAGS = {
  food: 'Alimentação',
  fun: 'Lazer',
  job: 'Trabalho',
  transport: 'Transporte',
  health: 'Saúde',
};

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: '0',
      description: '',
      currency: '',
      payment: '',
      tag: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { price, description, currency, payment, tag } = this.state;

    return (
      <form>
        <FormHandler
          label="Valor:"
          type="number"
          name="price"
          min="0"
          step="0.01"
          value={ price }
          onChange={ this.onChange }
        />
        <FormHandler
          label="Descrição:"
          name="description"
          value={ description }
          onChange={ this.onChange }
        />
        <FormHandler
          label="Moeda:"
          type="select"
          name="currency"
          value={ currency }
          onChange={ this.onChange }
        />
        <FormHandler
          label="Método de pagamento:"
          type="select"
          name="payment"
          role="combobox"
          value={ payment }
          onChange={ this.onChange }
          options={ PAYMENT_METHODS }
        />
        <FormHandler
          label="Tag:"
          type="select"
          name="tag"
          value={ tag }
          onChange={ this.onChange }
          options={ TAGS }
        />
      </form>
    );
  }
}

export default ExpensesForm;
