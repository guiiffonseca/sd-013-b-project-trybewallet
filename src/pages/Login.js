import React from 'react';
import Input from '../Components/InputLogin';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <Input
          type="email"
          name="email"
          value={ email }
          label="Email:"
          onChange={ this.handleChange }
        />

        <Input
          type="password"
          name="password"
          value={ password }
          label="Senha:"
          onChange={ this.handleChange }
        />
        <button type="button">Entrar</button>
      </form>

    );
  }
}

export default Login;
