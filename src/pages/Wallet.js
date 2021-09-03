import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestWalletCoinsThunk } from '../actions';
import Form from '../components/Form';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  render() {
    return (
      <>
        <Header />
        <Form />
      </>);
  }
}

const mapDispatchToProps = (dispatch) => () => ({
  getCoins: () => dispatch(requestWalletCoinsThunk()),
});

Wallet.propTypes = {
  getCoins: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
