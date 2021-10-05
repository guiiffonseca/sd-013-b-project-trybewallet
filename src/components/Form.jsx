import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Api from '../Api';
import { saveExpensesThunk } from '../actions';
import Table from './Table';

const PAY = [
  'Dinheiro',
  'Cartão de crédito',
  'Cartão de débito',
];

const TAG = [
  'Alimentação',
  'Lazer',
  'Trabalho',
  'Transporte',
  'Saúde',
];

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddExpense = this.handleAddExpense.bind(this);
  }

  componentDidMount() {
    this.Countries();
  }

  async Countries() {
    const results = await Api();
    this.setState({
      exchangeRates: results,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleAddExpense() {
    const { saveExpenses } = this.props;
    saveExpenses(this.state);
  }

  renderValue() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor:
        {' '}
        <input
          type="text"
          name="value"
          id="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição:
        {' '}
        <input
          type="text"
          name="description"
          id="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCurrency() {
    const { currency, exchangeRates } = this.state;
    return (
      <label htmlFor="currency">
        Moeda:
        {' '}
        <select
          name="currency"
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          {
            Object.keys(exchangeRates).map((code) => (
              <option key={ code } value={ code }>
                { code }
              </option>
            ))
          }
        </select>
      </label>
    );
  }

  renderMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento:
        {' '}
        <select
          name="method"
          id="method"
          value={ method }
          onChange={ this.handleChange }
        >
          {
            PAY.map((payMethod, index) => (
              <option
                key={ index }
                value={ payMethod }
              >
                {payMethod}
              </option>
            ))
          }
        </select>
      </label>
    );
  }

  renderTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        {' '}
        <select
          name="tag"
          id="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          {
            TAG.map((item, index) => (
              <option
                key={ index }
                value={ item }
              >
                { item }
              </option>
            ))
          }
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        <form>
          { this.renderValue() }
          { this.renderDescription() }
          { this.renderCurrency() }
          { this.renderMethod() }
          { this.renderTag() }
        </form>
        <button
          type="button"
          onClick={ this.handleAddExpense }
        >
          Adicionar despesa
        </button>
        <Table />
      </div>
    );
  }
}

Form.propTypes = {
  saveExpenses: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  saveExpenses: (expenses) => dispatch(saveExpensesThunk(expenses)),
});
export default connect(null, mapDispatchToProps)(Form);
