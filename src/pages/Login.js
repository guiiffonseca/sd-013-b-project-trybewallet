import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <header>
        <div>Login</div>
        <label htmlFor="email">
          Email:
          <input
            id="input-email"
            name="email"
            placeholder="email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            id="input-password"
            name="password"
            placeholder="password"
            data-testid="password-input"
            type="password"
          />
        </label>
        <Link to="/carteira">
          <button type="button">Entrar</button>
        </Link>
      </header>
    );
  }
}

export default Login;
