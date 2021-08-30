import React from 'react';
import Label from '../components/Label';

class Login extends React.Component {
  render() {
    return (
      <>
        <Label
          type="email"
          name="email"
          text="Email"
          className="clean"
          placeholder="email@example.com"
          dataTest="email-input"
        />
        <Label
          className="clean"
          text="Senha"
          type="password"
          name="password"
          dataTest="password-input"
        />
        <button
          type="button"
        >
          Entrar
        </button>
      </>
    );
  }
}

export default Login;
