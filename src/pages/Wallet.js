import React from 'react';
import Expenses from './Expenses';
import Header from './Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Expenses />
      </div>
    );
  }
}

export default Wallet;
