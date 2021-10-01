import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      isEmailValid: false,
      isPassValid: false,
    };

    this.verifyPassword = this.verifyPassword.bind(this);
    this.verifyEmail = this.verifyEmail.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  submitLogin(e) {
    e.preventDefault();
    const { addEmail, history } = this.props;
    const { email } = this.state;
    addEmail(email);
    history.push('/carteira');
  }

  verifyEmail({ target }) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(target.value)) {
      this.setState({ email: target.value, isEmailValid: true });
    } else {
      this.setState({ isEmailValid: false });
    }
  }

  verifyPassword({ target }) {
    const MIN_CHAR = 6;
    if (target.value.length >= MIN_CHAR) {
      this.setState({ isPassValid: true });
    } else {
      this.setState({ isPassValid: false });
    }
  }

  render() {
    const { isEmailValid, isPassValid } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <label htmlFor="login">
          Email:
          <input
            type="email"
            data-testid="email-input"
            id="login"
            onChange={ this.verifyEmail }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            data-testid="password-input"
            id="password"
            onChange={ this.verifyPassword }
          />
        </label>
        <button
          type="button"
          data-testid="login-submit-btn"
          onClick={ (e) => this.submitLogin(e) }
          disabled={ !(isEmailValid && isPassValid) }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  addEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addEmail: (email) => dispatch(getEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
