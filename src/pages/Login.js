import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailValid: false,
      passValid: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitLog = this.onSubmitLog.bind(this);
    this.passwordTest = this.passwordTest.bind(this);
    this.emailTest = this.emailTest.bind(this);
  }

  onSubmitLog() {
    const { history } = this.props;
    history.push('/carteira');
  }

  emailTest(value) {
    const num = -1;
    const strTest = value.slice(num);
    // extrair o ultimo caracter
    // fonte: https://qastack.com.br/programming/3884632/how-to-get-the-last-character-of-a-string#:~:text=Use%20charAt%20%3A,%C3%ADndice%20especificado%20em%20uma%20string.

    if (strTest === '@' || strTest === '.') {
      return this.setState({ emailValid: false });
    }
    if (!value.includes('@')) {
      return this.setState({ emailValid: false });
    }
    return this.setState({ emailValid: true });
  }

  passwordTest(value) {
    const num = 6;
    if (value.length < num) {
      this.setState({ passValid: false });
    } else {
      this.setState({ passValid: true });
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (name === 'email') {
      this.emailTest(value);
    }
    if (name === 'password') {
      this.passwordTest(value);
    }
  }

  render() {
    const { passValid, emailValid } = this.state;
    return (
      <div>
        <form>
          <fieldset>
            <h1>TRYBE</h1>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                data-testid="email-input"
                placeholder="Email"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                name="password"
                data-testid="password-input"
                placeholder="Password"
                onChange={ this.handleChange }
              />
            </label>
            <button
              type="button"
              onClick={ this.onSubmitLog }
              disabled={ !passValid || !emailValid }
            >
              Entrar
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  // dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
