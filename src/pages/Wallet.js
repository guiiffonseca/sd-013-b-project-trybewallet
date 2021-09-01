import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormWallet from '../components/FormWallet';
import { fetchApi } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchWalletApi } = this.props;
    fetchWalletApi();
  }

  render() {
    const { email, currencies, expenses, infoApi, errorApi } = this.props;
    console.log(infoApi);

    return (
      <div>
        <header>
          <h1>TrybeWallet</h1>
          <span data-testid="email-field">
            { email }
          </span>
          <span data-testid="total-field">
            {
              expenses.length <= 0 ? 0
                : expenses.reduce((total, currentValue) => total + currentValue)
            }
          </span>
          <span data-testid="header-currency-field">
            {
              currencies.length <= 0 ? 'BRL' : currencies
            }
          </span>
        </header>

        <FormWallet infoApi={ infoApi } errorApi={ errorApi } />

      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.func.isRequired,
  expenses: PropTypes.shape.isRequired,
  fetchWalletApi: PropTypes.func.isRequired,
  infoApi: PropTypes.shape.isRequired,
  errorApi: PropTypes.string.isRequired,
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
