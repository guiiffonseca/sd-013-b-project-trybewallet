import React, { Component } from 'react';
import AddExpenseBar from '../components/AddExpenseBar';
import Header from '../components/Header';

class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddExpenseBar />
      </div>
    );
  }
}

export default Wallet;
