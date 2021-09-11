import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLoginEmail, setLoginPassword } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validLogin = this.validLogin.bind(this);

    this.state = {
      email: '',
      password: '',
      inputEmail: false,
      inputPassword: false,
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    if (name === 'email') {
      this.setState({
        [name]: value,
      });
      this.validateEmail(value);
    }

    if (name === 'password') {
      this.setState({
        [name]: value,
      });
      this.validatePassword(value);
    }
  }

  // Refer: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  validateEmail(input) {
    const regex = /\S+@\S+\.\S+/;
    const testEmail = regex.test(input);

    if (testEmail === true) {
      this.setState({
        inputEmail: true,
      });
    } else {
      this.setState({
        inputEmail: false,
      });
    }
  }

  validatePassword(input) {
    const PASS_MIN = 5;

    if (input.length > PASS_MIN) {
      this.setState({
        inputPassword: true,
      });
    } else {
      this.setState({
        inputPassword: false,
      });
    }
  }

  validLogin() {
    const { history, dispatchSetEmail, dispatchSetPassword } = this.props;
    const { email, password } = this.state;
    dispatchSetEmail(email);
    dispatchSetPassword(password);
    history.push('/carteira');
  }

  render() {
    const { email, password, inputEmail, inputPassword } = this.state;

    return (
      <div className="login-container">
        <form className="login-area">
          <b className="login-title"> Trybe Wallet </b>
          <label htmlFor="email">
            <b>Email</b>
            <br />
            <input
              id="email"
              type="email"
              name="email"
              className="login-inputs"
              data-testid="email-input"
              height="200px"
              value={ email }
              onChange={ this.handleChange }
              placeholder="exemplo@exemplo.com"
            />
          </label>

          <label htmlFor="password">
            <b>Senha</b>
            <br />
            <input
              id="password"
              type="password"
              name="password"
              className="login-inputs"
              data-testid="password-input"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>

          <button
            type="button"
            className="login-inputs"
            onClick={ this.validLogin }
            disabled={ !inputEmail || !inputPassword }
          >
            Entrar
          </button>

        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchSetEmail: PropTypes.func,
  dispatchSetPassword: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchSetEmail: (payload) => dispatch(setLoginEmail(payload)),
  dispatchSetPassword: (payload) => dispatch(setLoginPassword(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
