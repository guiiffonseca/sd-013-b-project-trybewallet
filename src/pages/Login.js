import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../components/Input';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target }) {
    this.setState({
      email: target.value,
    });
    console.log(this.state);
  }

  render() {
    return (
      <>
        <Input
          id="email"
          type="email"
          placeholder="Digite seu email"
          test="email-input"
          onChange={ this.handleInput }
        />
        <Input
          id="passwaord"
          type="password"
          placeholder="Digite sua senha"
          test="password-input"
        />
        <button type="button">
          <Link to="/carteira">
            Entrar
          </Link>
        </button>
      </>
    );
  }
}

export default Login;
