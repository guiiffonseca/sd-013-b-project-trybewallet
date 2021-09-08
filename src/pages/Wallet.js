import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { saveExpense } from '../actions';

import Header from '../components/Header';
import SelectPayment from '../components/SelectPayment';
import AddExpense from '../components/AddExpenseButton';
import SelectTag from '../components/SelectTag';

import './Wallet.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.fetchApi = this.fetchApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addExpenses = this.addExpenses.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const fetchCurrencies = await fetch(
      'https://economia.awesomeapi.com.br/json/all',
    );
    const currencies = await fetchCurrencies.json();
    const currenciesList = Object.keys(currencies);
    currenciesList.splice(1, 1);
    this.setState({
      data: currenciesList,
    });
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  }

  async fetchExchangeRates() {
    const fetchRates = await fetch(
      'https://economia.awesomeapi.com.br/json/all',
    );
    const rates = await fetchRates.json();
    return rates;
  }

  async addExpenses() {
    const { expenses, currentExpense } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const id = expenses.length;
    const expense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: await this.fetchExchangeRates(),
    };
    currentExpense(expense);
  }

  render() {
    const { data, currency, tag, method, value, description } = this.state;
    return (
      <div>
        <Header />
        <form className="wallet-style">
          <label htmlFor="value">
            Valor
            <input
              id="value"
              onChange={ this.handleChange }
              type="number"
              value={ value }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              id="description"
              onChange={ this.handleChange }
              value={ description }
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency" onChange={ this.handleChange } value={ currency }>
              {data.map((currencies) => (
                <option key={ currencies } value={ currencies }>
                  {currencies}
                </option>
              ))}
            </select>
          </label>
          <SelectPayment onchange={ this.handleChange } method={ method } />
          <SelectTag onchange={ this.handleChange } tag={ tag } />
          <AddExpense onclick={ this.addExpenses } />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  currentExpense: (expense) => dispatch(saveExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentExpense: PropTypes.func.isRequired,
};
