import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import saveEmail from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkInputEmail = this.checkInputEmail.bind(this);
    this.checkInputPassWord = this.checkInputPassWord.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
    this.loginToPage = this.loginToPage.bind(this);
  }

  checkInputEmail(email) {
    if (email.includes('@' && '.com')) {
      return true;
    }
    return false;
  }

  checkInputPassWord(password) {
    const MIN_VALUE_PASSWORD = 6;
    if (password.length >= MIN_VALUE_PASSWORD) {
      return true;
    }
    return false;
  }

  validateLogin() {
    const { email, password } = this.state;
    const correctEmail = this.checkInputEmail(email);
    const correctPassword = this.checkInputPassWord(password);
    if (correctEmail === true && correctPassword === true) {
      return false;
    }
    return true;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  loginToPage() {
    const { history, sendEmailToGlobalState } = this.props;
    sendEmailToGlobalState(this.state);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            value={ email }
            data-testid="email-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            value={ password }
            data-testid="password-input"
            type="password"
            name="password"
            id="password"
            placeholder="******"
            onChange={ this.handleChange }
          />
        </label>
        <button
          disabled={ this.validateLogin() }
          type="submit"
          onClick={ this.loginToPage }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmailToGlobalState: (state) => dispatch(saveEmail(state)),
});

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.func).isRequired,
  sendEmailToGlobalState: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
