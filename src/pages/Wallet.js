import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import WalletInputs from '../components/WalletInputs';
import Tags from '../components/Tags';
import PaymentMethods from '../components/PaymentMethods';
import fetchCurrency, { addExpenses } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
    };

    this.handleInput = this.handleInput.bind(this);
    this.saveExpenses = this.saveExpenses.bind(this);
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async saveExpenses() {
    const { saveExpenses, getCurrencies } = this.props;
    await getCurrencies();
    const { currencies } = this.props;
    this.setState({
      exchangeRates: currencies,
    });
    await saveExpenses(this.state);
    this.setState((previous) => ({
      id: previous.id + 1,
    }));
  }

  render() {
    const { email, userExpenses } = this.props;
    let TOTAL = 0;
    const CURRENCY = 'BRL';
    const totalExpenses = () => {
      // eu estava pegando o currey do local state, e não do global state, por isso o valor total estava sempre errado;
      userExpenses
        .forEach(({ value, currency, exchangeRates }) => {
          TOTAL += value * exchangeRates[currency].ask;
        });
      return parseFloat(TOTAL).toFixed(2);
    };

    return (
      <>
        <header>
          <span data-testid="email-field">
            { `Email: ${email} `}
          </span>
          <span data-testid="total-field">
            {`Despesa Total: R$ ${totalExpenses()}`}
          </span>
          <span data-testid="header-currency-field">
            { CURRENCY }
          </span>
        </header>

        <form>
          <WalletInputs onChange={ this.handleInput } />
          <PaymentMethods onChange={ this.handleInput } />
          <Tags onChange={ this.handleInput } />

          <button
            type="button"
            onClick={ this.saveExpenses }
          >
            Adicionar despesa
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  userExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpenses: (payload) => dispatch(addExpenses(payload)),
  getCurrencies: () => dispatch(fetchCurrency()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  userExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  saveExpenses: PropTypes.func.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
