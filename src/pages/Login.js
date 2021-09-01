import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { emailValid } from '../actions/emailValid';

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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { emailValidSucess, history } = this.props;
    /* const { email } = this.state; */
    emailValidSucess(this.state);
    history.push('/carteira');
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
      <form onSubmit={ this.handleClick }>
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

        <button
          type="submit"
          disabled={ !this.disableButton() }
        >
          {' '}
          Entrar
          {' '}
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailValidSucess: (payload) => dispatch(emailValid(payload)),
});

Login.propTypes = {
  emailValidSucess: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

// Com a ajuda do colega de turma Heitor Gomes, consegui realizar o Requisito 3 do Projeto.
