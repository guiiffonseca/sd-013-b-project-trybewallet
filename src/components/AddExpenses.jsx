import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCurrenciesAndAddExpenseThunk } from '../actions';

class AddExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   const { getCurrencies } = this.props;
  //   getCurrencies();
  // }

  handleChange(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderValueInput() {
    const { value } = this.state;
    return (
      <label htmlFor="input-value">
        Valor:
        <input
          id="input-value"
          type="number"
          min="0"
          step="0.01"
          value={ value }
          onChange={ (event) => this.handleChange('value', event.target.value) }
        />
      </label>
    );
  }

  renderDescriptionInput() {
    const { description } = this.state;
    return (
      <label htmlFor="input-description">
        Descrição:
        <input
          id="input-description"
          type="text"
          value={ description }
          onChange={ (event) => this.handleChange('description', event.target.value) }
        />
      </label>
    );
  }

  renderCurrencySelect() {
    const { currency } = this.state;
    const { currencies } = this.props;
    return (
      <label htmlFor="input-currency">
        Moeda:
        <select
          id="input-currency"
          name="currency"
          onChange={ (event) => this.handleChange('currency', event.target.value) }
          value={ currency }
        >
          {currencies.map((item, index) => (
            <option key={ index } value={ item }>{ item }</option>
          ))}
        </select>
      </label>
    );
  }

  renderMethodSelect() {
    const { method } = this.state;
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <label htmlFor="input-method">
        Método de pagamento:
        <select
          id="input-method"
          name="method"
          onChange={ (event) => this.handleChange('method', event.target.value) }
          value={ method }
        >
          {methods.map((item, index) => (
            <option key={ index } value={ item }>{ item }</option>
          ))}
        </select>
      </label>
    );
  }

  renderTagSelect() {
    const { tag } = this.state;
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <label htmlFor="input-tag">
        Tag:
        <select
          id="input-tag"
          name="tag"
          onChange={ (event) => this.handleChange('tag', event.target.value) }
          value={ tag }
        >
          {tags.map((item, index) => (
            <option key={ index } value={ item }>{ item }</option>
          ))}
        </select>
      </label>
    );
  }

  renderSubmitButton() {
    const { id, addExpenseThunk } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const expenseNow = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      // exchangeRates: exchangeRatesNow,
    };
    return (
      <button
        type="button"
        onClick={ () => {
          addExpenseThunk(expenseNow);
        } }
      >
        Adicionar despesa
      </button>
    );
  }

  render() {
    return (
      <form>
        {this.renderValueInput()}
        {this.renderDescriptionInput()}
        {this.renderCurrencySelect()}
        {this.renderMethodSelect()}
        {this.renderTagSelect()}
        {this.renderSubmitButton()}
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
  id: PropTypes.number.isRequired,
  addExpenseThunk: PropTypes.func.isRequired,
  exchangeRatesNow: PropTypes.shape({}).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addExpenseThunk: (expense) => dispatch(
    getCurrenciesAndAddExpenseThunk(expense),
  ),
});

export default connect(null, mapDispatchToProps)(AddExpenses);
