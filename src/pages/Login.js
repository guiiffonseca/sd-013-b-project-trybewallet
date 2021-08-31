import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <div>
          <label htmlFor="email-input">
            E-mail:
            <input type="email" data-testid="email-input" />
          </label>
        </div>

        <div>
          <label htmlFor="password-input">
            Senha:
            <input type="password" data-testid="password-input" />
          </label>
        </div>
        <div>
          <input type="button" value="Entrar" />
        </div>
      </div>
    );
  }
}

export default Login;
