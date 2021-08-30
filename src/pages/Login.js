import React from 'react';
import { Input, Button } from '../components/Index';

class Login extends React.Component {
  render() {
    return (
      <div className="login-card">
        <Input testid="email-input" type="email" id="email" label="E-mail" />
        <Input testid="password-input" type="password" id="password" label="Password" />
        <Button label="Entrar" />
      </div>
    );
  }
}

export default Login;
