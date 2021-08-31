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
          <button type="submit">
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
