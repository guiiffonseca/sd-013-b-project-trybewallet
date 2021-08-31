import React from 'react';
import FormExpenses from '../components/FormExpenses';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        TrybeWallet
        <Header />
        <FormExpenses />
      </div>
    );
  }
}

export default Wallet;
