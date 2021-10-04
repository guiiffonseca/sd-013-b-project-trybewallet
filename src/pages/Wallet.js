import React from 'react';
import Header from '../components/Header';
import ExpenseForms from '../components/ExpenseForms';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ExpenseForms />
        <Table />

      </>
    );
  }
}

export default Wallet;
