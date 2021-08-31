import React from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import './Wallet.css';
import AddExpenses from '../components/AddExpenses';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      // (email.length === 0)
      //   ? <Redirect to="/" />
      //   : <div>TrybeWallet</div>
      <div className="wallet-main">
        <Header email={ email } />
        <AddExpenses />
        <div>TrybeWallet</div>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { email } }) => ({ email });

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
