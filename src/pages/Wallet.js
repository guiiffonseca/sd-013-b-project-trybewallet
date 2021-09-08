import React from 'react';
import Header from '../Components/Header';
import AddExpense from './AddExpense';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AddExpense />
      </div>);
  }
}

export default Wallet;
