import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import login from '../actions';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <Header />);
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = ({ user: { email } }) => ({
  email,
});
const mapDispatchToProps = (dispatch) => ({
  saveLogin: (email) => dispatch(login(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
