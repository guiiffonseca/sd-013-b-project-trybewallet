import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <main>
        <input
          type="email"
          placeholder="Email"
          id="email"
          data-testid="email-input"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          data-testid="password-input"
        />
        <button
          type="button"
        >
          Entrar
        </button>
      </main>
    );
  }
}

export default Login;
