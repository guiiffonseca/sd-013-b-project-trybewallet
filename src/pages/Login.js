import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <h1>Login</h1>
        <input
          type="text"
          name="inputEmail"
          placeholder="Email"
          data-testid="email-input"
        />
        <input
          type="text"
          name="inputPassword"
          placeholder="Password"
          data-testid="password-input"
        />
        <button type="button">Entrar</button>
      </>
    );
  }
}

export default Login;
