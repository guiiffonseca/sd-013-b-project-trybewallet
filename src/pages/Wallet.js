import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectTag from '../components/SelectTag';
import SelectPaymentMethod from '../components/SelectPaymentMethod';
import { addExpenses as addExpensesEvent } from '../actions/index';
import Input from '../components/Input';

const linkCrrenciesAPI = 'https://economia.awesomeapi.com.br/json/all';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      currenciesList: [],
      allCurrencies: {},
      atualCurrency: 'USD',
      paymentMethod: 'Dinheiro',
      tag: 'Alimentação',
      totalField: 0,
    };

    this.getCurrenciesAPI = this.getCurrenciesAPI.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.calculateExpenses = this.calculateExpenses.bind(this);
  }

  componentDidMount() {
    this.getCurrenciesAPI();
  }

  async getCurrenciesAPI() {
    const response = await fetch(linkCrrenciesAPI);
    const object = await response.json();
    const currenciesList = Object.keys(object).filter(
      (currency) => currency !== 'USDT' && currency !== 'DOGE',
    );
    console.log(object);

    this.setState({
      currenciesList,
      allCurrencies: object,
    });
  }

  calculateExpenses(prevState, expensesValue = '0', atualCurrency) {
    console.log(prevState, Number(expensesValue), atualCurrency);
    return (prevState + (Number(expensesValue) * atualCurrency.ask));
  }

  handleClick() {
    this.getCurrenciesAPI();
    const { id, atualCurrency, allCurrencies } = this.state;
    const { addExpenses } = this.props;

    // Método de capturar os ids com o DOM para setar o estado global foi consultado do código do Amós Rodrigues
    const expenses = {
      currency: document.querySelector('#moeda').value,
      description: document.querySelector('#descrição').value,
      exchangeRates: allCurrencies,
      id,
      method: document.querySelector('#PaymentMethod').value,
      tag: document.querySelector('#tag').value,
      value: document.querySelector('#valor').value,
    };

    this.setState((prevState) => ({
      id: prevState.id + 1,
      totalField: this.calculateExpenses(
        prevState.totalField,
        expenses.value,
        allCurrencies[atualCurrency],
      ),
    }));

    addExpenses({ atualCurrency, expenses });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { handleClick, handleChange } = this;
    const { email, currencies } = this.props;
    const { id, currenciesList, atualCurrency, totalField } = this.state;

    return (
      <>
        <header>
          <p>{id}</p>
          <p data-testid="email-field">{email}</p>
          <p data-testid="header-currency-field">{currencies}</p>
          <p data-testid="total-field">{totalField}</p>
        </header>
        <form>
          <Input
            handleChange={ handleChange }
            labelDescrption="Valor"
            name="valor"
            id="valor"
          />
          <Input
            handleChange={ handleChange }
            labelDescrption="Descrição"
            name="descrição"
            id="descrição"
          />
          <label htmlFor="moeda">
            Moeda
            <select
              id="moeda"
              name="atualCurrency"
              value={ atualCurrency }
              onChange={ handleChange }
            >
              {currenciesList.map((curValue) => (
                <option key={ curValue }>{curValue}</option>
              ))}
            </select>
          </label>
          <SelectPaymentMethod handleChange={ handleChange } />
          <SelectTag handleChange={ handleChange } />
          <button type="button" onClick={ handleClick }>
            Adicionar despesa
          </button>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf().isRequired,
  addExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user, wallet }) => {
  const { email } = user;
  const { currencies } = wallet;
  return {
    email,
    currencies,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (payload) => dispatch(addExpensesEvent(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
