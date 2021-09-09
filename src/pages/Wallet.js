import React from 'react';
import ExpeseForm from '../components/ExpeseForm/ExpeseForm';
import Header from '../components/Header/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        TrybeWallet
        <ExpeseForm />
      </div>);
  }
}

export default Wallet;
