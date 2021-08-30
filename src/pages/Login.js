import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkInputEmail = this.checkInputEmail.bind(this);
    this.checkInputPassWord = this.checkInputPassWord.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
  }

  checkInputEmail(email) {
    if (email.includes('@' && '.com')) {
      return true;
    }
    return false;
  }

  checkInputPassWord(password) {
    const MIN_VALUE_PASSWORD = 6;
    if (password.length >= MIN_VALUE_PASSWORD) {
      return true;
    }
    return false;
  }

  validateLogin() {
    const { email, password } = this.state;
    const correctEmail = this.checkInputEmail(email);
    const correctPassword = this.checkInputPassWord(password);
    if (correctEmail === true && correctPassword === true) {
      return false;
    }
    return true;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            value={ email }
            data-testid="email-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            value={ password }
            data-testid="password-input"
            type="text"
            name="password"
            id="password"
            placeholder="******"
            onChange={ this.handleChange }
          />
        </label>
        <button
          disabled={ this.validateLogin() }
          type="submit"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
