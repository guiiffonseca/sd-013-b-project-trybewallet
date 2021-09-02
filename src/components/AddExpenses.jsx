import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getCurrenciesAndAddExpenseThunk, editExpense as editExpenseAction,
} from '../actions';

const STATE_DEFAULT = {
  editingUpdate: true,
  id: 0,
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class AddExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = STATE_DEFAULT;
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.getExpenseId = this.getExpenseId.bind(this);
    this.editExpenseLoad = this.editExpenseLoad.bind(this);
  }

  componentDidUpdate() {
    const { editingUpdate } = this.state;
    const { editing } = this.props;
    if (editingUpdate && editing) { this.editExpenseLoad(); }
  }

  getExpenseId() {
    const { expenses } = this.props;
    const idNew = expenses.length !== 0 ? expenses[expenses.length - 1].id + 1 : 0;
    this.setState({ id: idNew });
  }

  editExpenseLoad() {
    const { expenses, editingId } = this.props;
    const expenseEditing = expenses.find((expense) => expense.id === editingId);
    this.setState({
      editingUpdate: false,
      id: expenseEditing.id,
      value: expenseEditing.value,
      description: expenseEditing.description,
      currency: expenseEditing.currency,
      method: expenseEditing.method,
      tag: expenseEditing.tag,
    });
  }

  handleChange(field, newValue) {
    const { editing } = this.props;
    this.setState({ [field]: newValue });
    if (!editing) { this.getExpenseId(); }
  }

  resetState() {
    this.setState(STATE_DEFAULT);
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
    const { addExpenseThunk } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    const expenseNow = {
      id,
      value,
      description,
      currency,
      method,
      tag,
    };
    return (
      <button
        type="button"
        onClick={ () => {
          addExpenseThunk(expenseNow);
          this.resetState();
        } }
      >
        Adicionar despesa
      </button>
    );
  }

  renderEditButton() {
    const RESET_ID = 99999999999;
    const { editExpense, expenses, editingId, updateEditing } = this.props;
    const expenseEditing = expenses.find((expense) => expense.id === editingId);
    const { exchangeRates } = expenseEditing;
    const { id, value, description, currency, method, tag } = this.state;
    const expenseNow = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    return (
      <button
        type="button"
        onClick={ () => {
          editExpense(expenseNow);
          this.resetState();
          updateEditing(false, RESET_ID);
        } }
      >
        Editar despesa
      </button>
    );
  }

  render() {
    const { editing } = this.props;
    const styleEditing = 'editing-form';
    return (
      <form className={ `expenses-form ${editing && styleEditing}` }>
        {this.renderValueInput()}
        {this.renderDescriptionInput()}
        {this.renderCurrencySelect()}
        {this.renderMethodSelect()}
        {this.renderTagSelect()}
        {editing ? this.renderEditButton() : this.renderSubmitButton()}
      </form>
    );
  }
}

AddExpenses.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({}).isRequired,
  ).isRequired,
  id: PropTypes.number.isRequired,
  addExpenseThunk: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
  updateEditing: PropTypes.func.isRequired,
  exchangeRatesNow: PropTypes.shape({}).isRequired,
  editing: PropTypes.bool.isRequired,
  editingId: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired,
  ).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addExpenseThunk: (expense) => dispatch(getCurrenciesAndAddExpenseThunk(expense)),
  editExpense: (expense) => dispatch(editExpenseAction(expense)),
});

export default connect(null, mapDispatchToProps)(AddExpenses);
