import React from 'react';
import { connect } from 'react-redux';
import { WALLET_INFO as WALLET_INFOACTION } from '../actions';

class Wallet extends React.Component {
  render() {
    return <div>TrybeWallet</div>;
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  WALLET_INFO: (payload) => dispatch(WALLET_INFOACTION(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
