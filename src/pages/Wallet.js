import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderWallet from '../components/HeaderWallet';
import FormWallet from '../components/FormWallet';
import { requestCurrenciesApi } from '../actions/index';
import '../styles/wallet.css';
import TableExpense from '../components/TableExpense';

class Wallet extends React.Component {
  componentDidMount() {
    const { saveCurrencies } = this.props;
    saveCurrencies();
  }

  renderCurrencies(arrayOfCurrencies) {
    const filteredCurrencies = arrayOfCurrencies
      .filter((currency) => currency !== 'USDT');
    return filteredCurrencies.map((currency, index) => (
      <option key={ `currency${index}` } value={ currency }>{ currency }</option>
    ));
  }

  render() {
    const { currencies } = this.props;
    const { email } = this.props;
    return (
      <main>
        <HeaderWallet email={ email } />
        <FormWallet
          currencies={ currencies }
          renderCurrencies={ this.renderCurrencies }
        />
        <TableExpense />
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  saveCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveCurrencies: () => dispatch(requestCurrenciesApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
