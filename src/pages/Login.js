import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input type="email" testid="email-input" />
        <input type="text" data-testid="password-input" />
        <button type="button">Entrar</button>
      </div>);
  }
}

export default Login;
