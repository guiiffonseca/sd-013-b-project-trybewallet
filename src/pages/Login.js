import React from 'react';
import Input from '../components/Input';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validLogin: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  checkLogin() {
    const { password, email } = this.state;
    const MIN_LENGTH = 6;

    if (password.length >= MIN_LENGTH && email === 'alguem@email.com') {
      this.setState({
        validLogin: true,
      });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.checkLogin());
  }

  render() {
    const { email, password, validLogin } = this.state;
    return (
      <div>
        <Input
          name="email"
          type="email"
          id="email"
          value={ email }
          placeholder="exemplo@exemplo.com"
          testId="email-input"
          onChange={ this.handleChange }
        />
        <Input
          name="password"
          type="password"
          id="password"
          value={ password }
          placeholder="senha"
          testId="password-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ !validLogin }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
