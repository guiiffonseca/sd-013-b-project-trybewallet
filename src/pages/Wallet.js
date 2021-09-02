import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormWallet from '../components/FormWallet';
import { fetchApi } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
    };
  }

  async componentDidMount() {
    const { fetchWalletApi } = this.props;
    await fetchWalletApi();
  }

  render() {
    const { email, infoApi, errorApi } = this.props;
    const { total } = this.state;
    console.log(infoApi);
    console.log(total);

    return (
      <div>
        <header>
          <h1>TrybeWallet</h1>
          <span data-testid="email-field">
            { email }
          </span>
          <span data-testid="total-field">
            { total }
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
