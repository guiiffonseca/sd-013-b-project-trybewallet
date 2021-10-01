import React from 'react';
import ExpenseLoader from '../components/ExpenseLoader';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h2>TrybeWallet</h2>
        <Header />
        <ExpenseLoader />
      </div>
    );
  }
}

export default Wallet;
