import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrenciesThunk, updateExpense } from '../actions';
import SelectCurrency from './select-currency';
import SelectPayment from './select-payment';
import SelectTag from './select-tag';
import AddButton from './buttons';

const LOCAL_STATE = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: '',
  tag: '',
  exchangeRates: {},
};

class ExpenseEdit extends Component {
  constructor(props) {
    super(props);

    this.state = LOCAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.setLocalState = this.setLocalState.bind(this);
  }

  componentDidMount() {
    this.setLocalState();
  }

  onClick(event) {
    event.preventDefault();
    const { dispatchUpdateExpense } = this.props;
    dispatchUpdateExpense(this.state);
  }

  setLocalState() {
    const { expenseId, expenses } = this.props;
    const filteredExpense = expenses.find((item) => (item.id === expenseId));
    const {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    } = filteredExpense;

    this.setState({
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  resetLocalState() {
    this.setState(LOCAL_STATE);
  }

  renderSubmitButton() {
    const { value, method, tag } = this.state;

    return (
      <AddButton
        className="expensives-form-long-inputs"
        name="Editar despesa"
        disabled={ value === '' || method === '' || tag === '' }
        onClick={ (event) => this.onClick(event) }
      />
    );
  }

  render() {
    const { value, description, currency, method, tag } = this.state;

    return (
      <form className="edit-expense">
        <label htmlFor="value">
          Valor:
          {' '}
          <input
            id="value"
            className="expensives-form-short-inputs"
            type="text"
            name="value"
            placeholder="0.00"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <SelectCurrency
          currency={ currency }
          onChange={ this.handleChange }
        />
        <SelectPayment
          method={ method }
          onChange={ this.handleChange }
        />
        <SelectTag
          tag={ tag }
          onChange={ this.handleChange }
        />
        <label htmlFor="description">
          Descrição:
          {' '}
          <input
            id="description"
            className="expensives-form-long-inputs"
            type="text"
            name="description"
            placeholder="Opcional"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        {this.renderSubmitButton()}
      </form>
    );
  }
}

ExpenseEdit.propTypes = {
  expenses: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  ),
  editExpense: PropTypes.bool,
  expenseId: PropTypes.number,
  dispatchSetCurrencies: PropTypes.func,
  dispatchUpdateExpense: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  editExpense: state.wallet.editExpense,
  expenseId: state.wallet.expenseId,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSetCurrencies: () => dispatch(fetchCurrenciesThunk()),
  dispatchUpdateExpense: (expense) => dispatch(updateExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseEdit);
