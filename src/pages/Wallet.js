import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderWallet from '../components/HeaderWallet';
import FormWallet from '../components/FormWallet';
import '../styles/wallet.css';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <main>
        <HeaderWallet email={ email } />
        <FormWallet />
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
