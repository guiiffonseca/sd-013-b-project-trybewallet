import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import action from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: {
        moeda: '!',
      },
      value: 3,
      description: 'Hot Dog',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.getCurrenciesFromApi = this.getCurrenciesFromApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getCurrenciesFromApi();
  }

  getCurrenciesFromApi() {
    fetch('https://economia.awesomeapi.com.br/json/all').then((currencies) => {
      currencies.json().then((finalCurrencies) => {
        this.setState({
          currencies: finalCurrencies,
        });
      });
    });
  }

  walletPartOne(param1, param2) {
    const { totalValue } = this.props;
    return (
      <div>
        <header data-testid="email-field">{ param1 }</header>
        <div data-testid="total-field">{ totalValue || 0 }</div>
        <div data-testid="header-currency-field">BRL</div>
        <label htmlFor="input-one" data-testid="value-input">
          Valor
          <input type="text" id="input-one" name="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="input-two">
          Descrição
          <input
            type="text"
            id="input-two"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="wallet-select" data-testid="currency-input">
          Moeda
          <select id="wallet-select" name="currency" onChange={ this.handleChange }>
            {param2.map((e) => (
              <option key={ e }>{e}</option>
            ))}
          </select>
        </label>
        <label htmlFor="wallet-select-2" data-testid="currency-input">
          Método de pagamento
          <select id="wallet-select-2" name="method" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="wallet-select-3" data-testid="currency-input">
          Tag
          <select id="wallet-select-3" name="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar Despesa</button>
      </div>
    );
  }

  handleClick() {
    const { expensesToSend, expenses: globalExpenses } = this.props;
    const id = globalExpenses.length
      ? globalExpenses.length
      : 0;
    this.getCurrenciesFromApi();
    const { value, description, currency, method, tag, currencies } = this.state;
    const expenses = {
      id,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates: currencies,
    };
    expensesToSend(expenses);
  }

  handleChange({ target }) {
    const { name } = target;
    // const actualEventString = actualEvent.toString();
    this.setState({
      [name]: target.value,
    });
  }

  render() {
    const { currencies } = this.state;
    // console.log(currencies);
    const { userEmail } = this.props;

    const eachCurrency = Object.keys(currencies);
    const filteredCurrency = eachCurrency.reduce((acc, currency) => {
      if (currency !== 'USDT') {
        acc.push(currency);
      }
      return acc;
    }, []);

    return (
      <div>
        {this.walletPartOne(userEmail, filteredCurrency)}
      </div>
    );
  }
}

function mapStateToProps(GLOBAL_STATE) {
  return {
    userEmail: GLOBAL_STATE.user.email,
    expenses: GLOBAL_STATE.wallet.expenses,
    totalValue: GLOBAL_STATE.wallet.totalValue,
    // wallet: GLOBAL_STATE.wallet,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    expensesToSend: (item) => dispatch(action.wallet(item)),
  };
}

Wallet.propTypes = {
  expenses: PropTypes.shape({
    length: PropTypes.string,
  }).isRequired,
  expensesToSend: PropTypes.func.isRequired,
  totalValue: PropTypes.number.isRequired,
  userEmail: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
