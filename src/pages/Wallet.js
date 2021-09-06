import React from 'react';
import AddExpensesForm from '../components/AddExpensesForm';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet">
        <Header />
        <AddExpensesForm />
      </div>
    );
  }
}

export default Wallet;
