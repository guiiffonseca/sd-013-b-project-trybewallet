import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input
          type="email"
          data-testid="email-input"
          placeholder="Insira o email"
          id="email"
        />
        <input
          type="text"
          data-testid="password-input"
          placeholder="Insira a senha"
          id="password"
        />
        <button type="button">
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
