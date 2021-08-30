import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form>
          <label htmlFor="email-input">
            Email
            <input
              type="email"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password-input">
            Senha
            <input
              type="password"
              data-testid="password-input"
            />
          </label>
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
