import React from 'react';
import Header from '../Components/Header';
import WalletForm from '../Components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <WalletForm />
      </div>
    );
  }
}

export default Wallet;
