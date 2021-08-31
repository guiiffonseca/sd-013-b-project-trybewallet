import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          Login
          <input
            type="email"
            name="login"
            id="login"
            data-testid="email-input"
          />
          senha
          <input
            type="password"
            name="login"
            id="login"
            data-testid="password-input"
          />
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
