import React from 'react';
import Header from '../components/Header';
import ExpenseForms from '../components/ExpenseForms';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ExpenseForms />
      </>
    );
  }
}

export default Wallet;
