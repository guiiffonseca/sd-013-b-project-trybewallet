import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import trybe from '../images/trybe.png';
import '../images/images.css';
import { addExpenses } from '../actions';
// import store from '../redux/store';

class Wallet extends React.Component {
  constructor() {
    super();
    this.calculateExpenses = this.calculateExpenses.bind(this);
    this.addTag = this.addTag.bind(this);
    this.addCurrencies = this.addCurrencies.bind(this);
    this.addPaymentMethod = this.addPaymentMethod.bind(this);
    this.onChange = this.onChange.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      paymentMethod: 'Cartão de crédito',
      tag: 'Lazer',
      isCalculating: true,
      currencies: [],
      totalExpenses: 0,
    };
  }

  componentDidMount() {
    this.getCurrencies();
  }

  onChange(event) {
    const toChange = event.target.id;
    const newValue = event.target.value;

    this.setState({
      [toChange]: newValue,
    });

    // console.log(toChange);
    // console.log(newValue);
    // console.log(this.state);
  }

  async getCurrencies() {
    await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((result) => this.setState({
        currencies: [result],
      }))
      .catch((err) => console.log(err, 'error'));
    // console.log(store.getState());
  }

  calculateExpenses() {
    const { expenses } = this.props;
    const totalExpenses = expenses.reduce((acc, cv) => acc + cv);
    console.log(expenses);
    this.setState({
      isCalculating: false,
      totalExpenses,
    });
    return totalExpenses;
  }

  addTag() {
    return (
      <label htmlFor="tag">
        Tag:
        <select id="tag" onChange={ this.onChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  addCurrencies() {
    const { currencies } = this.state;
    // console.log(currencies);
    if (currencies.length > 0) {
      const currency = Object.values(currencies[0]);
      return (
        currency.filter((element) => element.codein !== 'BRLT')
          .map(
            (element, key) => (
              <option
                key={ key }
                value={ element.code }
              >
                { element.code }
              </option>),
          )
      );
    }
  }

  addPaymentMethod() {
    return (
      <label htmlFor="paymentMethod">
        Método de pagamento:
        <select id="paymentMethod" onChange={ this.onChange }>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
          <option value="Dinheiro">Dinheiro</option>
        </select>
      </label>
    );
  }

  handleSubmit() {
    this.getCurrencies();
    const {
      value,
      description,
      currency,
      paymentMethod,
      tag,
      currencies } = this.state;
    const { dispatchAddExpenses, expenses } = this.props;
    const objectCurrencies = { ...currencies[0] };
    const expenseSummary = {
      id: expenses.length,
      value,
      description,
      currency,
      method: paymentMethod,
      tag,
      exchangeRates: objectCurrencies,
    };
    dispatchAddExpenses(expenseSummary);
    // console.log(this.state.totalExpenses);
    const valueOnconverter = objectCurrencies[currency].ask * value;
    this.setState((previousState) => ({
      ...previousState,
      totalExpenses: previousState.totalExpenses + valueOnconverter,
    }));
    this.updatePage(valueOnconverter);
  }

  updatePage(value) {
    const totalExpensesDOM = document.querySelector('#total-field');
    const newValue = Number(totalExpensesDOM.innerHTML) + value;
    totalExpensesDOM.innerHTML = newValue;
  }

  render() {
    const { isCalculating } = this.state;
    const { email, expenses } = this.props;
    return (
      <div>
        <header className="flexbox-container">
          <img className="main-logo" src={ trybe } alt="Trybe logo" />
          <div data-testid="email-field">
            {email}
          </div>
          <div data-testid="total-field" id="total-field">
            { isCalculating
              ? 0
              : this.calculateExpenses }
            {console.log('THESE ARE EXPENSES')}
            {console.log(expenses)}
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
          <form>
            <label htmlFor="value">
              Valor:
              <input type="text" id="value" onChange={ this.onChange } />
            </label>
            <label htmlFor="description">
              Descrição:
              <input type="text" id="description" onChange={ this.onChange } />
            </label>
            <label htmlFor="currency">
              Moeda:
              <select id="currency" onChange={ this.onChange }>
                {this.addCurrencies()}
              </select>
            </label>
            {this.addPaymentMethod()}
            {this.addTag()}
            <button type="button" onClick={ this.handleSubmit }>
              Adicionar despesa
            </button>
          </form>
        </header>
      </div>
    );
  }
}

Wallet.propTypes = {
  // currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchAddExpenses: PropTypes.func.isRequired,
};

// Wallet.defaultProps = {
//   expenses: [0],
// };

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAddExpenses: (expense) => dispatch(addExpenses(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
