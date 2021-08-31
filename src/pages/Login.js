import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import emailValid from '../actions/emailValid';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  disableButton() {
    const { email, password } = this.state;
    const passwordLimit = 6;
    // Para validar email com React é necessário utilizar o Regex:
    // Referência:https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const emailValidRegex = /\S+@\S+\.\S+/;
    if (password.length >= passwordLimit && emailValidRegex.test(email)) {
      return true;
    }
    return false;
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label data-testid="text-input-label" htmlFor="Input-email">
          E-mail

          <input
            type="email"
            data-testid="email-input"
            id="Input-email"
            name="email"
            value={ email }
            onChange={ this.handleEmailChange }
          />
        </label>

        <label htmlFor="Input-password">
          Senha

          <input
            type="password"
            minLength="6"
            data-testid="password-input"
            id="Input-password"
            name="password"
            value={ password }
            onChange={ this.handlePasswordChange }
          />
        </label>

        <Link to="/carteira">
          <button type="button" disabled={ !this.disableButton() }> Entrar </button>
        </Link>

      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailValid: (value) => dispatch(emailValid(value)),
});

export default connect(null, mapDispatchToProps)(Login);
// Commit Inicial;
