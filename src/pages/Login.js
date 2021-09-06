import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionUser as USER_INFOACTION } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      valideEmail: false,
      validePassword: false,
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  validatePassword({ target }) {
    const { id, value } = target;
    const MINLENGTH = 6;
    if (value.length >= MINLENGTH) {
      this.setState({
        [id]: value,
        validePassword: true,
      });
    }
  }

  validateEmail({ target }) {
    const { id, value } = target;
    const valideEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
      .test(value);
    // Regex com uma função que eu tirei do grupo do projeto Trivia.
    // Faz a verificação do email vendo se contem os caracteres exigidos.
    if (valideEmail) {
      this.setState({
        [id]: value,
        valideEmail: true,
      });
    }
  }

  handleClick() {
    const { actionUser, history } = this.props;
    const { email } = this.state;
    actionUser(email);
    history.push('/carteira');
  }

  render() {
    const { password, email, valideEmail, validePassword } = this.state;
    return (
      <form>
        <div>Login</div>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            value={ email }
            data-testid="email-input"
            onChange={ this.validateEmail }
          />
        </label>
        <label htmlFor="password">
          First name:
          <input
            type="password"
            id="password"
            value={ password }
            data-testid="password-input"
            onChange={ this.validatePassword }
          />
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
          disabled={ !(valideEmail && validePassword) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  actionUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  actionUser: (payload) => dispatch(USER_INFOACTION(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
