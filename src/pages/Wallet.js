import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addExpense } from '../actions/index';

import './Wallet.css';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currencies: [],
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
  }

  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((res) => {
        if (!res.ok) throw new Error('Bad Request');
        return res.json();
      })
      .then((data) => {
        const currencies = Object.keys(data).filter((el) => el !== 'USDT');
        this.setState({ currencies });
      });
  }

  changeHandler(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  addHandler(e) {
    e.preventDefault();
    const { value, description, currency, method, tag } = this.state;
    const { addToWallet, expenses } = this.props;

    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((res) => {
        if (!res.ok) throw new Error('Bad Request');
        return res.json();
      })
      .then((data) => {
        const expense = {
          id: expenses.length,
          value,
          description,
          currency,
          method,
          tag,
          exchangeRates: data,
        };

        this.setState({
          value: 3,
          description: '',
          currency: 'USD',
          method: '',
          tag: '',
        });

        addToWallet(expense);
      });
  }

  renderHeader() {
    const { email, expenses } = this.props;

    const totalAmount = expenses.reduce((a, b) => {
      const { ask } = b.exchangeRates[b.currency];

      if (ask > 0) {
        return a + (b.value * ask);
      }
      return a;
    }, 0);

    return (
      <header className="wallet-header">
        <h1>
          TR
          <span>Y</span>
          BE
        </h1>
        <div className="right-content">
          <h4 data-testid="email-field">{ `Email: ${email}` }</h4>
          <h4>
            {'Despesa Total: '}
            <span data-testid="total-field">{totalAmount}</span>
            <span data-testid="header-currency-field"> BRL</span>
          </h4>
        </div>
      </header>
    );
  }

  render() {
    const { currencies } = this.state;

    return (
      <>
        { this.renderHeader() }
        <form className="wallet-form">
          <label htmlFor="value" className="value">
            Valor:
            <input onChange={ this.changeHandler } type="number" min="0" id="value" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select onChange={ this.changeHandler } id="currency">
              { currencies.map((el) => <option key={ el } value={ el }>{el}</option>) }
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select onChange={ this.changeHandler } id="method">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select onChange={ this.changeHandler } id="tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <label htmlFor="description">
            Descrição:
            <input onChange={ this.changeHandler } type="text" id="description" />
          </label>
          <button onClick={ this.addHandler } type="submit">
            Adicionar despesa
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addToWallet: (value) => dispatch(addExpense(value)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  addToWallet: PropTypes.func.isRequired,
  expenses: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
