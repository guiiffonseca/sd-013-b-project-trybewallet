import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { setUsername } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      buttonClick: false,
    };
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.submitClick = this.submitClick.bind(this);
  }

  validateEmail(event) {
    const userEmail = event.target.value;
    const caractersPassword = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (caractersPassword.test((userEmail))) {
      return this.setState({
        email: userEmail,
      });
    }
    return this.setState({
      email: '',
    });
  }

  validatePassword(event) {
    const userPassword = event.target.value;
    const caractersPassword = 6;
    if (userPassword.length >= caractersPassword) {
      return this.setState({
        password: userPassword,
      });
    }
    return this.setState({
      password: '',
    });
  }

  submitClick() {
    const { SET_USERNAME } = this.props;
    const { email } = this.state;
    SET_USERNAME(email);
    return this.setState({
      buttonClick: true,
    });
  }

  render() {
    const { password, email, buttonClick } = this.state;
    if (buttonClick) {
      return <Redirect to="/carteira" />;
    }

    return (
      <main>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            data-testid="email-input"
            name="email"
            onChange={ this.validateEmail }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            data-testid="password-input"
            name="password"
            onChange={ this.validatePassword }
          />
        </label>
        <button
          type="button"
          disabled={ !password || !email }
          onClick={ this.submitClick }
        >
          Entrar
        </button>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  SET_USERNAME: (payload) => dispatch(setUsername(payload)),
});

Login.propTypes = {
  SET_USERNAME: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
