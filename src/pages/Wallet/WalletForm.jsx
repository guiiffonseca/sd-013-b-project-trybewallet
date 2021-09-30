import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setExpenses, sumExpenses, setCurrencies } from '../../actions';
import Expenses from './WalletForm/Expenses';
import Description from './WalletForm/Description';
import PaymentMethod from './WalletForm/PaymentMethod';
import SelectCurrency from './WalletForm/SelectCurrency';
import Tag from './WalletForm/Tag';

class WalletForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseCount: 1,
      exchangeRates: {},
      value: 0,
      currency: 'USD',
      currencies: {},
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((data) => data.json())
      .then((jsonData) => this.setState({
        currencies: jsonData,
        exchangeRates: jsonData,
      }));
  }

  fetchExchangeRates() {
    const { defCurrencies } = this.props;
    const { expenseCount, currencies } = this.state;
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((data) => data.json())
      .then((jsonData) => this.setState({
        exchangeRates: jsonData,
        expenseCount: expenseCount + 1,
        currencies: jsonData,
      }))
      .then(() => defCurrencies(currencies));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { saveExpenses, addExpenses } = this.props;
    const { exchangeRates, expenseCount,
      value, description, tag, method, currency } = this.state;
    this.fetchExchangeRates();
    saveExpenses({
      id: expenseCount - 1,
      value,
      description,
      tag,
      currency,
      method,
      exchangeRates,
    });
    addExpenses(Math.ceil(100 * Number(value)
      * Number(exchangeRates[currency].ask)) / 100);
  }

  render() {
    const { expenses, currency, tag,
      paymentMethod, description, currencies } = this.state;
    return (
      <form id="transaction-data">
        <Expenses value={ expenses } onChange={ this.handleChange } />
        <SelectCurrency
          value={ currency }
          onChange={ this.handleChange }
          currencies={ currencies }
        />
        <PaymentMethod value={ paymentMethod } onChange={ this.handleChange } />
        <Tag value={ tag } onChange={ this.handleChange } />
        <Description value={ description } onChange={ this.handleChange } />
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpenses: (payload) => dispatch(setExpenses(payload)),
  addExpenses: (payload) => dispatch(sumExpenses(payload)),
  defCurrencies: (payload) => dispatch(setCurrencies(payload)),
});

WalletForm.propTypes = {
  saveExpenses: PropTypes.func.isRequired,
  addExpenses: PropTypes.func.isRequired,
  defCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
