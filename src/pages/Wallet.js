import React from 'react';
import { connect } from 'react-redux';
import AddExpenseForm from '../components/AddExpenseForm';
import WalletHeader from '../components/WalletHeader';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <AddExpenseForm />
        <ExpensesTable />
      </div>
    );
  }
}

export default connect(null, null)(Wallet);
