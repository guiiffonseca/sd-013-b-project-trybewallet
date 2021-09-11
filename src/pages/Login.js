import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLoginValue } from '../actions';

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
    const { history, dispatchSetValue } = this.props;
    const { email } = this.state;
    dispatchSetValue(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, inputEmail, inputPassword } = this.state;

    return (
      <form>

        <label htmlFor="email">
          <input
            type="email"
            id="email"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
            placeholder="exemplo@exemplo.com"
          />
        </label>

        <label htmlFor="password">
          <input
            id="password"
            name="password"
            type="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>

        <button
          type="button"
          onClick={ this.validLogin }
          disabled={ !inputEmail || !inputPassword }
        >
          Entrar
        </button>

      </form>
    );
  }
}

Login.propTypes = {
  dispatchSetValue: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (localState) => dispatch(setLoginValue(localState)) });

export default connect(null, mapDispatchToProps)(Login);
