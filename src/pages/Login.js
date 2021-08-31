import React from 'react';
import { Link } from 'react-router-dom';
import component from '../components';

class Login extends React.Component {
  render() {
    const EMAIL_INPUT_TEST_ID = 'email-input';
    const PASSWORD_INPUT_TEST_ID = 'password-input';
    // const VALID_EMAIL = 'alguem@email.com';
    // const VALID_PASSWORD = '123456'bob;
    const onChange = () => {
      console.log('digitou');
    };
    return (
      <div>
        <Link to="/wallet">back to wallet</Link>
        <div>
          TrybeWallet
          I AM LOGIN
        </div>
        <component.Button>
          Entrar
        </component.Button>
        <component.Input
          inputId="email-login"
          testId={ EMAIL_INPUT_TEST_ID }
          type="email"
          onChange={ onChange }
          labelText="e-mail: "
        />
        <component.Input
          inputId="password-login"
          testId={ PASSWORD_INPUT_TEST_ID }
          type="text"
          onChange={ onChange }
          labelText="password: "
        />
      </div>
    );
  }
}

export default Login;
