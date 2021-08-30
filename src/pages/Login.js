import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <fieldset>
          <label htmlFor="email">
            Email:
            <input
              data-testid="email-input"
              name="email"
              type="email"
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              data-testid="password-input"
              name="password"
              type="password"
            />
          </label>
          <button type="button">Entrar</button>
        </fieldset>
      </div>
    );
  }
}

export default Login;
