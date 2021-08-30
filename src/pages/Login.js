import React from 'react';
import { validateEmail, validatePassword } from '../utils';

class Login extends React.Component {
  constructor() {
    super();
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.state = {
      email: '',
      password: '',
      isEmailValid: false,
      isPasswordValid: false,
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

  render() {
    const { isEmailValid, isPasswordValid } = this.state;
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
              type="text"
              id="password"
              onChange={ this.handlePasswordInput }
            />
          </label>
          <button
            type="submit"
            disabled={ !isButtonEnabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
