import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email">
          Email
          <input type="email" id="email" data-testid="email-input" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" id="password" data-testid="password-input" />
        </label>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
