import React from 'react';
import { connect } from 'react-redux';
import { storeCoins } from '../actions';
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

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (value) => dispatch(storeCoins(value)),
});

export default connect(null, mapDispatchToProps)(Wallet);
