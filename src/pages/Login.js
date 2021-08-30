import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input type="email" placeholder="E-mail" data-testid="email-input" />
        <input type="password" placeholder="senha" data-testid="password-input" />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
