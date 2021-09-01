import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email">
          E-mail:
          <input
            data-testid="email-input"
            placeholder="Insira seu e-mail"
            id="email"
            type="email"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            data-testid="password-input"
            placeholder="Insira sua senha"
            id="password"
            type="password"
          />
        </label>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
