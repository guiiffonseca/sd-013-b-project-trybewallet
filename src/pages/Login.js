import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick() {

  }

  render() {
    const { email, password } = this.state;
    let validation = true;
    const MIN_PASSWORD_LENGTH = 6;
    // Regex para validação de email adaptada do seguinte link: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const EMAIL_REGEX = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;
    const emailValidation = EMAIL_REGEX.test(email);
    if (emailValidation && password.length >= MIN_PASSWORD_LENGTH) {
      validation = false;
    }
    return (
      <form action="">
        <label htmlFor="email-input">
          Email:
          <input
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          Password:
          <input
            type="password"
            name="password"
            data-testid="password-input"
            minLength="6"
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ validation }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

export default Login;
