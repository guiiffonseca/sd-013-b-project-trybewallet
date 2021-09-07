import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      isValidEmail: false,
      password: '',
      isValidPass: false,
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail({ target }) {
    const email = target.value;
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    const isValidEmail = emailTest.test(email);

    this.setState({
      email,
      isValidEmail,
    });
  }

  handlePassword({ target }) {
    const password = target.value;
    const MIN_PASS_CHAR = 5;
    let isValidPass = false;

    if (target.value.length > MIN_PASS_CHAR) {
      isValidPass = true;
    }

    this.setState({
      password,
      isValidPass,
    });
  }

  render() {
    const { isValidEmail, isValidPass } = this.state;

    return (
      <form>
        <label htmlFor="user_email">
          Email:
          <input
            type="email"
            data-testid="email-input"
            id="user_email"
            onChange={ this.handleEmail }
          />
        </label>
        <label htmlFor="user_password">
          Senha:
          <input
            data-testid="password-input"
            id="user_password"
            type="password"
            onChange={ this.handlePassword }
          />
        </label>
        <button type="submit" disabled={ !(isValidEmail && isValidPass) }>
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
