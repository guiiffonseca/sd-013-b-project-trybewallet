import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletForm from './Wallet/WalletForm';
import Header from './Wallet/Header';
import PurchaseTable from './Wallet/PurchaseTable';

class Wallet extends React.Component {
  // componentDidMount() {
  //   const { getCurrencies } = this.props;
  //   getCurrencies();
  // }

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

Wallet.propTypes = {
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
