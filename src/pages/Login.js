import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <fieldset>
          Email
          <input data-testid="email-input" name="login" type="text" label="email" />
          Senha
          <input data-testid="password-input" name="senha" type="password" />
          <button type="submit" label="button">Entrar</button>
        </fieldset>
      </div>
    );
  }
}

export default Login;
