import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setExpenses, fetchCurrenciesThunk, fetchExchangeRatesThunk } from '../actions';
// import fetchCurrencies from '../services/fetchAPI';
// import AddButton from './buttons';
import SelectCurrency from './select-currency';
import SelectPayment from './select-payment';
import SelectTag from './select-tag';

const INITIAL_STATE = {
  value: 0,
  description: '',
  currency: '',
  method: '',
  tag: '',
};

class ExpensesForm extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    // this.updateExchangeRates = this.updateExchangeRates.bind(this);
    this.resetLocalState = this.resetLocalState.bind(this);
  }

  // componentDidMount() {
  //   const { dispatchLoadExchangeRates } = this.props;
  //   const data = dispatchLoadExchangeRates();
  //   console.log(data);
  // }

  onClick(event) {
    event.preventDefault();
    const { value, description, currency, method, tag } = this.state;
    const {
      expenses,
      dispatchSetExpenses,
      // exchangeRates,
      dispatchLoadExchangeRates,
    } = this.props;
    dispatchLoadExchangeRates();
    // console.log(exchangeRates);
    dispatchSetExpenses({
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      // exchangeRates,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    // this.setState((prev) => ({ evaluation: prev.evaluation + value }));
  }

  // fetchExchange() {
  //   const data = await fetchCurrencies();
  //   return console.log('fetch', data);
  // }

  // async updateExchangeRates() {
  //   const { dispatchLoadExchangeRates } = this.props;
  //   const data = await dispatchLoadExchangeRates();
  //   console.log('up', data);
    // this.setState({ exchangeRates: 'xablau' });
    // const data = await fetchCurrencies();
    // return console.log(data);
    // const {  } = this.props;
    // this.setState(() => ({
    //   exchangeRates: [data],
    // }));
  // }

  resetLocalState() {
    this.setState(INITIAL_STATE);
  }

  renderSubmitButton() {
    return (
      <button
        className="expensives-form-long-inputs"
        type="button"
        onClick={ (event) => {
          // this.updateExchangeRates();
          this.onClick(event);
          this.resetLocalState();
        } }
      >
        Adicionar despesa
      </button>
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
            value={ description }
            onChange={ this.handleChange }
          />
          {' '}
          {' '}
          {this.renderSubmitButton()}
        </label>
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  expenses: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  ),
  currencies: PropTypes.object,
  exchangeRates: PropTypes.object,
  dispatchSetExpenses: PropTypes.func,
  dispatchLoadExchangeRates: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
  exchangeRates: state.wallet.exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(fetchCurrenciesThunk()),
  dispatchSetExpenses: (localState) => dispatch(setExpenses(localState)),
  dispatchLoadExchangeRates: () => dispatch(fetchExchangeRatesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
