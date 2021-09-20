import React from 'react';
import HeaderWallet from '../components/HeaderWallet';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <HeaderWallet />
        <WalletForm />
      </div>
    );
  }
}

export default Wallet;
