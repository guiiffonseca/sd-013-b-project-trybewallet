import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.state = {
      email: '',
      password: '',
      emailOk: false,
      passwordOk: false,
    };
  }

  async handleEmailChange({ target }) {
    const { value } = target;
    this.setState({ email: value });
    // função includes foi sugerida por Nikolai, em monitoria
    if (value.includes('@' && '.com')) {
      this.setState({ emailOk: true });
    }
  }

  async handlePasswordChange({ target }) {
    const { value } = target;
    const minLenght = 6;
    this.setState({ password: value });
    if (value.length >= minLenght) {
      this.setState({ passwordOk: true });
    }
  }

  render() {
    const { email, password, emailOk, passwordOk } = this.state;
    const minLenght = 6;
    return (
      <div>
        <p>Hello, TrybeWallet!</p>
        Login:
        <input
          type="text"
          data-testid="email-input"
          onChange={ this.handleEmailChange }
          value={ email }
        />
        { (email !== '' && !email.includes('@' && '.com'))
        && <p>Invalid email format!</p> }
        Password:
        <input
          type="text"
          data-testid="password-input"
          onChange={ this.handlePasswordChange }
          value={ password }
        />
        { (password.length <= minLenght && password.length !== 0)
        && <p>Invalid Password: Too short!</p> }
        <button
          type="button"
          disabled={ !(emailOk && passwordOk) }
        >
          Entrar
        </button>
      </div>);
  }
}

export default Login;
