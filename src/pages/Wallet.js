import React from 'react';
import { connect } from 'react-redux';
import AddExpenseForm from '../components/AddExpenseForm';
import WalletHeader from '../components/WalletHeader';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <AddExpenseForm />
      </div>
    );
  }
}

export default connect(null, null)(Wallet);
