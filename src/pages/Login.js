import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email-input">
          <input type="email" data-testid="email-input" name="login" />
        </label>
        <label htmlFor="password-input">
          <input type="password" data-testid="password-input" name="password" />
        </label>
        <button type="submit" data-testid="login-button">
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
