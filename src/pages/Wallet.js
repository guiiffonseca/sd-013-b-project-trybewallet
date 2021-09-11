import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Header from '../components/header';

class Wallet extends Component {
  // constructor(props) {
  //   super(props);

  // this.handleChange = this.handleChange.bind(this);
  // this.validateEmail = this.validateEmail.bind(this);
  // this.validatePassword = this.validatePassword.bind(this);
  // this.validLogin = this.validLogin.bind(this);

  // this.state = {

  // };
  // }

  render() {
    return (
      <Header />
    );
  }
}

// Wallet.propTypes = {
//   dispatchSetValue: PropTypes.func,
//   history: PropTypes.shape({
//     push: PropTypes.func,
//   }),
// }.isRequired;

// const mapDispatchToProps = (dispatch) => ({
//   dispatchSetValue: (localState) => dispatch(setLoginValue(localState)) });

// export default connect(null, mapDispatchToProps)(Wallet);

export default Wallet;
