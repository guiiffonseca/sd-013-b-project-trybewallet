import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormWallet from '../Components/FormWallet';
import Table from '../Components/Table';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <header>
        <div><p data-testid="email-field">{email}</p></div>
        <div><p data-testid="total-field">0</p></div>
        <div><p data-testid="header-currency-field">BRL</p></div>
        <div><FormWallet /></div>
        <Table />
      </header>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
