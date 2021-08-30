import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <Input
          type="text"
          placeholder="email"
          data-testid="email-input"
        />
        <Input
          type="password"
          placeholder="senha"
          data-testid="password-input"
        />
        <Button
          type="button"
          label="Entrar"
        />
      </div>
    );
  }
}

export default Login;
