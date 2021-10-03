import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrenciesThunk, fetchExpensesThunk } from '../actions';
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

class ExpensesForm extends Component {
  constructor(props) {
    super(props);

    this.state = LOCAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.resetLocalState = this.resetLocalState.bind(this);
  }

  componentDidMount() {
    const { dispatchSetCurrencies } = this.props;
    dispatchSetCurrencies();
  }

  onClick(event) {
    event.preventDefault();
    const { dispatchAddExpense } = this.props;
    dispatchAddExpense(this.state);
    this.resetLocalState();
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
        name="Adicionar despesa"
        disabled={ value === '' || method === '' || tag === '' }
        onClick={ (event) => this.onClick(event) }
      />
    );
  }

  render() {
    const { value, description, currency, method, tag } = this.state;

    return (
      <form className="expenses-form">
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

ExpensesForm.propTypes = {
  dispatchSetCurrencies: PropTypes.func,
  dispatchAddExpense: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchSetCurrencies: () => dispatch(fetchCurrenciesThunk()),
  dispatchAddExpense: (localState) => dispatch(fetchExpensesThunk(localState)),
});

export default connect(null, mapDispatchToProps)(ExpensesForm);
