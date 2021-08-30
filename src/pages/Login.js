import React from 'react';
// import { history } from 'react-router-dom';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
  }

  onSubmit() {
    const { history } = this.props;
    history.push('/carteira');
    console.log('cliquei');
  }

  validateLogin() {
    const { email, password } = this.state;
    const passwordMinLength = 6;
    let validatedLogin = true;

    if (email.includes('@' && '.com') && password.length >= passwordMinLength) {
      validatedLogin = false;
    } else {
      validatedLogin = true;
    }
    return validatedLogin;
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <fieldset>
        <legend>Entre com sua conta</legend>
        <label htmlFor="email">
          Login
          <input
            id="email"
            name="email"
            type="email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            id="password"
            name="password"
            type="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          onClick={ this.onSubmit }
          disabled={ this.validateLogin() }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

export default Login;

Login.propTypes = {
  history: PropTypes.func.isRequired,
};
