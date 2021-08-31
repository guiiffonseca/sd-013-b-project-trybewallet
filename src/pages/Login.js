import React from 'react';

import Input from '../components/Input';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  isToActivateButton() {
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const minimumPasswordLength = 6;
    const { email, password } = this.state;
    const isValidEmail = regex.test(email);
    const isValidPassword = password.length >= minimumPasswordLength;

    if (isValidEmail && isValidPassword) {
      return true;
    }
    return false;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <Input
            type="text"
            name="email"
            value={ email }
            id="email"
            dataTestId="email-input"
            placeholder="exemplo@exemplo.com"
            onChange={ this.handleChanges }
          />
          <Input
            type="password"
            name="password"
            value={ password }
            id="password"
            dataTestId="password-input"
            placeholder="senha"
            onChange={ this.handleChanges }
          />
          <button type="submit" disabled={ !this.isToActivateButton() }>
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
