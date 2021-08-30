import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email-input">
          Email
          <input
            type="email"
            data-testid="email-input"
            id="email-input"
            name="email-input"
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            data-testid="password-input"
            id="password-input"
            name="password-input"
          />
        </label>
        <button type="button">
          Entrar
        </button>

      </div>);
  }
}

export default Login;
