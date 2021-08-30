import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </label>
        <label htmlFor="password">
          <input
            data-testid="password-input"
            type="text"
            name="password"
            id="password"
            placeholder="******"
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default Login;
