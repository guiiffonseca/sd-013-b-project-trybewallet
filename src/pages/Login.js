import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>TELA DE LOGIN</h2>
        </div>
        <div>
          <Input dataText="email-input" type="email" holderText="Email" />
          <Input dataText="password-input" type="password" holderText="Password" />
          <Button text="Entrar" />
        </div>
      </div>
    );
  }
}

export default Login;
