import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailValid: false,
      passwordValid: false,
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.validadeEmail = this.validadeEmail.bind(this);
  }

  handleChanges({ target: { value, name } }) {
    this.setState({ [name]: value });
    if (name === 'email') {
      const current = this.validadeEmail(value);
      this.setState({ emailValid: current });
    } else {
      const current = this.validadePassword(value);
      this.setState({ passwordValid: current });
    }
  }

  validadeEmail(value) {
    // Regex retirado do StackOverflow: (https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript)
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (regex.test(value));
  }

  validadePassword(value) {
    const minimalCharacters = 6;
    return (value.length >= minimalCharacters);
  }


  render() {
    const { email, emailValid, password, passwordValid } = this.state;
    return (
      <div>
        <label htmlFor="email-input">
          Email
          <input
            type="text"
            data-testid="email-input"
            name="email"
            onChange={ this.handleChanges }
            value={ email }
          />
        </label>
        <label htmlFor="email-input">
          Password
          <input
            type="password"
            data-testid="password-input"
            name="password"
            onChange={ this.handleChanges }
            value={ password }
          />
        </label>
        <button
          type="button"
          onClick=""
          data-testid=""
          disabled={
            !(emailValid && passwordValid)
          }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
