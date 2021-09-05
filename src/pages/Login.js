import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginSubmit as loginAction } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disableBtn: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.btnVerification = this.btnVerification.bind(this);
    this.btnSubmit = this.btnSubmit.bind(this);
  }

  btnSubmit() {
    const { history, loginSubmit } = this.props;
    const { email } = this.state;
    loginSubmit(email);
    history.push('/carteira');
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => this.btnVerification());
  }

  btnVerification() {
    const { email, password } = this.state;
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    const verifyEmail = emailCheck.test(email);
    const passwordcheck = 6;
    const verifyPassword = password.length >= passwordcheck;
    if (verifyEmail && verifyPassword) {
      this.setState({ disableBtn: false });
    } else {
      this.setState({ disableBtn: true });
    }
  }

  render() {
    const { email, password, disableBtn } = this.state;
    return (
      <div>
        <label htmlFor="email">
          Login
          <input
            type="email"
            id="email"
            name="email"
            value={ email }
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="password"
            name="password"
            value={ password }
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          onClick={ this.btnSubmit }
          disabled={ disableBtn }
        >
          Entrar
        </button>

      </div>
    );
  }
}

Login.propTypes = {
  loginSubmit: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginSubmit: (email) => dispatch(loginAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
