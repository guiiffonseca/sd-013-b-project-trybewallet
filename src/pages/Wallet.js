import React from 'react';
import Header from '../components/header';
import FormDespesas from '../components/FormDespesas';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h2>TrybeWallet</h2>
        <Header />
        <FormDespesas />
      </div>
    );
  }
}

export default Wallet;
