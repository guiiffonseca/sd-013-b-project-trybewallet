import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor() {
    super();
    this.isValidEmail = this.isValidEmail.bind(this);
    this.isValidPassword = this.isValidPassword.bind(this);
  }

  isValidEmail(email) {
    const requiredFormat = new RegExp(/^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/);
    return requiredFormat.test(email);
  }

  isValidPassword(password) {
    const minimumLength = 6;
    return password.length >= minimumLength;
  }

  render() {
    const { state: { email, password }, handleClick } = this.props;
    return (
      <button
        type="submit"
        disabled={ !(this.isValidEmail(email) && this.isValidPassword(password)) }
        onClick={ handleClick }
      >
        Entrar
      </button>
    );
  }
}

Button.propTypes = {
  handleChange: PropTypes.func,
  password: PropTypes.string,
}.isRequeride;
