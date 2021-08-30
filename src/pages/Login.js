import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form action="">
        <label htmlFor="email-input">
          Email:
          <input type="email" data-testid="email-input" />
        </label>
        <label htmlFor="password-input">
          Password:
          <input type="password" data-testid="password-input" />
        </label>
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
