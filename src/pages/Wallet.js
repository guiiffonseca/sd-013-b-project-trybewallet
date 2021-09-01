import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderWallet from '../components/HeaderWallet';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return <HeaderWallet email={ email } />;
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
