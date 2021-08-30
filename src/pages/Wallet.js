import React from 'react';
import { Link } from 'react-router-dom';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">back to login</Link>
        <div>
          TrybeWallet
          I AM WALLET
        </div>
      </div>
    );
  }
}

export default Wallet;
