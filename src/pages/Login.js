import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="login-email">
          Email:
          <input
            id="login-email"
            name="email"
            type="email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="login-password">
          Senha:
          <input
            type="password"
            name="password"
            id="login-password"
            data-testid="password-input"
          />
        </label>
        <div>
          <input
            type="submit"
            value="Enviar"
          />
        </div>
      </form>
    );
  }
}

export default Login;
