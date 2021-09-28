import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/Wallet.css';

class Header extends React.Component {
  render() {
    return (
      <h1 className="header">TrybeWallet</h1>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
