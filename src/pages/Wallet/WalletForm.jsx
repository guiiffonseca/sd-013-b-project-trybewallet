import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setExpenses, sumExpenses } from '../../actions';
import Expenses from './WalletForm/Expenses';
import Description from './WalletForm/Description';
import PaymentMethod from './WalletForm/PaymentMethod';
import SelectCurrency from './WalletForm/SelectCurrency';
import Tag from './WalletForm/Tag';

class WalletForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseCount: 0,
      exchangeRates: {},
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { saveExpenses, addExpenses } = this.props;
    this.fetchExchangeRates();
    // saveExpenses([]);
  }

  fetchExchangeRates() {
    const { expenseCount } = this.state;
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((data) => data.json())
      .then((jsonData) => this.setState({
        exchangeRates: jsonData,
        expenseCount: expenseCount + 1,
      }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { saveExpenses, addExpenses, expenses } = this.props;
    const { exchangeRates, expenseCount,
      value, description, tag, method, currency } = this.state;
    // const currency = document.getElementById('select-currency').value;
    // const purchaseValue = Number(document.getElementById('expenses').value);
    // const purchaseDescription = document.getElementById('description').value;
    // const paymentMethod = document.getElementById('payment-method').value;
    // const tag = document.getElementById('tag').value;
    
    // this.fetchExchangeRates();

    // const data = {
    //   id: expenseCount - 1,
    //   value: purchaseValue,
    //   description: purchaseDescription,
    //   currency,
    //   method: paymentMethod,
    //   tag,
    //   exchangeRates,
    // };
    saveExpenses({
      id: expenseCount -1,
      value,
      description,
      tag,
      currency,
      method,
      exchangeRates,
    });

    addExpenses( (Math.ceil(100 * Number(value) * Number(exchangeRates[currency].ask)) / 100) );
    // let totalExpenses = 0;
    // for (let index = 0; index < expenses.length; index += 1) {
    //   totalExpenses += expenses[index].value
    //   * expenses[index].exchangeRates[expenses[index].currency].ask;
    // }
    // addExpenses(Math.round(100 * totalExpenses) / 100);
  }

  render() {
    const { expenses, currency, tag,
      paymentMethod, description } = this.state;
    return (
      <form id="transaction-data">
        <Expenses value={ expenses } onChange={ this.handleChange } />
        <SelectCurrency value={ currency } onChange={ this.handleChange } />
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
});

WalletForm.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  saveExpenses: PropTypes.func.isRequired,
  addExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
