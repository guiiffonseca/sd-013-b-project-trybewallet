import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state({

    });
  }

  render() {
    return (
      <main>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            data-testid="email-input"
            name="email"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            data-testid="password-input"
            name="password"
          />
        </label>
        <button type="button">Entrar</button>
      </main>
    );
  }
}

export default Login;
