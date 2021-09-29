import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletForm from './Wallet/WalletForm';
import Header from './Wallet/Header';
import PurchaseTable from './Wallet/PurchaseTable';
import { getCurrencies as fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerHTML = 0;
    getCurrencies();
  }

  componentDidUpdate() {

  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <Header />
        <WalletForm currencies={ currencies } />
        <PurchaseTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
