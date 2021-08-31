import React from 'react';

class Login extends React.Component {
  renderFormFields() {
    return (
      <form>
        <input
          data-testid="email-input"
          placeholder="E-mail"
        />
        <input
          data-testid="password-input"
          placeholder="Senha"
        />
        <button type="button">Entrar</button>
      </form>
    );
  }

  render() {
    return this.renderFormFields();
  }
}

export default Login;
