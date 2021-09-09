import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: {
        moeda: '!',
      },
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all').then((currencies) => {
      currencies.json().then((finalCurrencies) => {
        this.setState({
          currencies: finalCurrencies,
        });
      });
    });
  }

  walletPartOne(param1, param2) {
    return (
      <div>
        <header data-testid="email-field">{ param1 }</header>
        <div data-testid="total-field">0</div>
        <div data-testid="header-currency-field">BRL</div>
        <label htmlFor="input-one" data-testid="value-input">
          Valor
          <input type="text" id="input-one" />
        </label>
        <label htmlFor="input-two">
          Descrição
          <input type="text" id="input-two" />
        </label>
        <label htmlFor="wallet-select" data-testid="currency-input">
          Moeda
          <select id="wallet-select" name="moeda">
            {param2.map((e) => (
              <option key={ e }>{e}</option>
            ))}
          </select>
        </label>
        <label htmlFor="wallet-select-2" data-testid="currency-input">
          Método de pagamento
          <select id="wallet-select-2">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="wallet-select-3" data-testid="currency-input">
          Tag
          <select id="wallet-select-3">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    const { currencies } = this.state;
    console.log(currencies);
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
    // wallet: GLOBAL_STATE.wallet,
  };
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, null)(Wallet);
