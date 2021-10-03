import React from 'react';
import ExpeseForm from '../components/ExpeseForm/ExpeseForm';
import Header from '../components/Header/Header';
import Table from '../components/Table/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        TrybeWallet
        <ExpeseForm />
        <Table />
      </div>);
  }
}

export default Wallet;
