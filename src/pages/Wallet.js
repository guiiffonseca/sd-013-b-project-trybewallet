import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import action from '../actions';
import functions from '../services';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all: {
        id: 0,
        value: '0',
        currency: '',
        method: '',
        tag: '',
        description: '',
      },
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const { getWallet } = this.props;
    const awaitForWalletApi = async () => {
      const getWalletApi = await functions.walletApi();
      getWallet(getWalletApi);
    };
    awaitForWalletApi();
  }

  onChange(event) {
    const { name, value: thisValue } = event.target;
    // const { all: { value, currency, method, tag, description } } = this.state;
    const nameToString = name.toString();
    this.setState(({ all }) => ({
      all: {
        ...all,
        [nameToString]: thisValue,
      },
    }));
    // console.log(value, currency, method, tag, description);
  }

  onClick() {
    const { globalState, wallet } = this.props;
    const {
      all: { value, currency, method, tag, description },
    } = this.state;
    const id = globalState.wallet.expenses.length
      ? globalState.wallet.expenses.length
      : 0;
    const expenses = {
      id,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates: globalState.getWallet,
    };
    wallet(expenses);
    const { getWallet } = this.props;
    const awaitForWalletApi = async () => {
      const getWalletApi = await functions.walletApi();
      getWallet(getWalletApi);
    };
    awaitForWalletApi();
    console.log(globalState.getWallet);
  }

  labels() {
    return (
      <div>
        <label htmlFor="wallet-select-2" data-testid="currency-input">
          Método de pagamento
          <select
            name="method"
            onChange={ this.onChange }
            id="wallet-select-2"
          >
            <option key="11">Dinheiro</option>
            <option key="21">Cartão de crédito</option>
            <option key="31">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="wallet-select-3" data-testid="currency-input">
          Tag
          <select name="tag" onChange={ this.onChange } id="wallet-select-3">
            <option key="111">Alimentação</option>
            <option key="211">Lazer</option>
            <option key="311">Trabalho</option>
            <option key="312">Transporte</option>
            <option key="313">Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  labelsTwo(total) {
    const result = 187.12;
    return (
      <div>
        <div data-testid="total-field">{total > 0 ? result : 0}</div>
        <div data-testid="header-currency-field">BRL</div>
        <label htmlFor="input-one" data-testid="value-input">
          Valor
          <input
            name="value"
            onChange={ this.onChange }
            type="number"
            id="input-one"
          />
        </label>
        <label htmlFor="input-two">
          Descrição
          <input
            name="description"
            onChange={ this.onChange }
            type="text"
            id="input-two"
          />
        </label>
      </div>
    );
  }

  // const { tag, paymentMethod, currency, description } = this.state;
  // console.log(total, tag, paymentMethod, currency, description);
  render() {
    const { all: { value: total } } = this.state;
    // const { all } = this.state;
    // console.log(all);
    const {
      globalState: { user, getWallet },
    } = this.props;
    const eachCurrency = Object.keys(getWallet);
    const filteredCurrency = eachCurrency.reduce((acc, currency) => {
      if (currency !== 'USDT') {
        acc.push(currency);
      }
      return acc;
    }, []);
    return (
      <div>
        <header data-testid="email-field">{user.email}</header>
        <Link to="/">back to login</Link>
        { this.labelsTwo(total) }
        <label htmlFor="wallet-select" data-testid="currency-input">
          Moeda
          <select onChange={ this.onChange } id="wallet-select" name="currency">
            {filteredCurrency.map((e) => (
              <option key={ e }>{e}</option>
            ))}
          </select>
        </label>
        {this.labels()}
        <button onClick={ this.onClick } type="button">
          adicionar despesa
        </button>
      </div>
    );
  }
}

Wallet.propTypes = {
  getWallet: PropTypes.func.isRequired,
  globalState: PropTypes.objectOf(PropTypes.object).isRequired,
  wallet: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    globalState: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    user: (item) => dispatch(action.user(item)),
    getWallet: (item) => dispatch(action.getWallet(item)),
    wallet: (item) => dispatch(action.wallet(item)),
    // updateISSLocation: async () => await dispatch(action.updateISSLocation()),
    // getISSLocation: () => dispatch(action.getISSLocationThunk()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
