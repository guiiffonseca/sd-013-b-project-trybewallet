import React from 'react';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import SocialLogin from './SocialLogin';

class LoginRightContainer extends React.Component {
  render() {
    return (
      <div className="right-container">
        <div className="form-container">
          <div className="login-register-buttons">
            <span>LOGIN</span>
            <span>CADASTRO</span>
          </div>
          <SocialLogin />
          <form>
            <InputField
              setclass="login-input"
              testid="email-input"
              onchange=""
              placeholder="Seu email"
              name="email"
              type="email"
            />
            <InputField
              setclass="login-input"
              testid="password-input"
              onchange=""
              placeholder="Senha"
              // placeholder=""
              name="password"
              type="password"
            />
            <Button
              setclass="login-button"
              onclick=""
              textButton="Entrar"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginRightContainer;
