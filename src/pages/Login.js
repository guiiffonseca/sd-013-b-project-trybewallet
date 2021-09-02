import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { setEmail as setEmailAction } from '../actions';
import { validateEmail, validatePassword } from '../utils';

class Login extends React.Component {
  constructor() {
    super();
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleSaveEmailToGlobalState = this.handleSaveEmailToGlobalState.bind(this);
    this.state = {
      email: '',
      password: '',
      isEmailValid: false,
      isPasswordValid: false,
      redirect: false,
    };
  }

  handleEmailInput(event) {
    const eventValue = event.target.value;
    const isEmailValid = validateEmail(eventValue);
    this.setState((prevState) => ({
      ...prevState,
      email: eventValue,
      isEmailValid,
    }));
  }

  handlePasswordInput(event) {
    const password = event.target.value;
    const isPasswordValid = validatePassword(password);

    this.setState((prevState) => ({
      ...prevState,
      password,
      isPasswordValid,
    }));
  }

  handleSaveEmailToGlobalState(event) {
    event.preventDefault();
    const { email } = this.state;
    const { setEmail } = this.props;
    setEmail(email);
    this.setState((prevState) => ({
      ...prevState,
      redirect: true,
    }));
  }

  render() {
    const { isEmailValid, isPasswordValid, redirect } = this.state;
    const isButtonEnabled = isEmailValid && isPasswordValid;
    return (
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">
            Email
            <input
              data-testid="email-input"
              type="text"
              id="email"
              onChange={ this.handleEmailInput }
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              data-testid="password-input"
              type="password"
              id="password"
              onChange={ this.handlePasswordInput }
            />
          </label>
          <button
            type="submit"
            disabled={ !isButtonEnabled }
            onClick={ this.handleSaveEmailToGlobalState }
          >
            Entrar
          </button>
          {redirect && <Redirect to="/carteira" />}
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(setEmailAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
