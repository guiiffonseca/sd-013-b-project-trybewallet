import React from 'react';

class Login extends React.Component {
  handleClick() {
    this.setState({});
  }

  render() {
    return (
      <div>
        <p>Hello, TrybeWallet!</p>
        Login:
        <input type="text" data-testid="email-input" />
        Password:
        <input type="text" data-testid="password-input" />
        <button type="button" disabled>Entrar</button>
      </div>);
  }
}

export default Login;
