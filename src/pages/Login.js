import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../components/Input';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const PASSWORD_MINIMUM_CHAR = 6;
    // regex: https://www.w3resource.com/javascript/form/email-validation.php
    const EMAIL_VALIDATION = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return (
      <fieldset>
        <form>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Digite seu email"
            test="email-input"
            onChange={ this.handleInput }
          />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Digite sua senha"
            test="password-input"
            onChange={ this.handleInput }
          />
          <button
            type="button"
            disabled={ password.length < PASSWORD_MINIMUM_CHAR
              || !EMAIL_VALIDATION.test(email) }
          >
            <Link to="/carteira">
              Entrar
            </Link>
          </button>
        </form>
      </fieldset>
    );
  }
}

export default Login;
