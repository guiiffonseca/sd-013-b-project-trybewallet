import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormWallet from '../components/FormWallet';
import { fetchApi } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();

    // this.state = {
    //   total: 0,
    // };

    this.totalExpenses = this.totalExpenses.bind(this);
  }

  componentDidMount() {
    const { fetchWalletApi } = this.props;
    fetchWalletApi();
  }

  totalExpenses() {
    const { expenses } = this.props;

    return expenses.reduce((acc, { value, currency, exchangeRates }) => {
      acc += parseFloat(value) * parseFloat(exchangeRates[currency].ask);
      return acc;
    }, 0);
  }

  render() {
    const { email, infoApi, errorApi } = this.props;
    // const { total } = this.state;
    console.log(infoApi);

    return (
      <div>
        <header>
          <h1>TrybeWallet</h1>
          <span data-testid="email-field">
            { email }
          </span>
          <span data-testid="total-field">
            { this.totalExpenses().toFixed(2) }
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </header>

        <FormWallet infoApi={ infoApi } errorApi={ errorApi } />

      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchWalletApi: PropTypes.func.isRequired,
  infoApi: PropTypes.objectOf(
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ).isRequired,
  errorApi: PropTypes.string.isRequired,
  expenses: PropTypes.objectOf(
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,

  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,

  infoApi: state.api.infoApi,
  errorApi: state.api.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchWalletApi: () => dispatch(fetchApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
