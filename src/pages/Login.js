import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { login } from '../actions/index';

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
    const { email } = this.state;
    const { userEmail } = this.props;
    userEmail(email);
  }

  render() {
    const { email, password } = this.state;
    let validation = true;
    const MIN_PASSWORD_LENGTH = 6;
    // console.log(validation);

    // Regex para validação de email adaptada do seguinte link: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;

    const emailValidation = EMAIL_REGEX.test(email);
    // console.log(emailValidation);
    if (emailValidation && password.length >= MIN_PASSWORD_LENGTH) {
      // console.log(validation);
      validation = false;
    }
    // console.log(validation);

    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          placeholder="Insira o email"
          id="email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Insira a senha"
          id="password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
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

Login.propTypes = {
  userEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userEmail: (email) => dispatch(login(email)),
});

export default connect(null, mapDispatchToProps)(Login);
