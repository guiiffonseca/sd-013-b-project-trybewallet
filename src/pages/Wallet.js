import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Header from '../components/Header';
import Coin from '../components/Coin';
import Payment from '../components/Payment';
import Tags from '../components/Tags';
import InputEntrys from '../components/InputEntrys';

class Wallet extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //   };
  // }

  render() {
    return (
      <div>
        <div>
          TrybeWallet
          <Header />
        </div>
        <form>
          <InputEntrys />
          <Coin />
          <Payment />
          <Tags />
        </form>
      </div>
    );
  }
}

export default Wallet;
