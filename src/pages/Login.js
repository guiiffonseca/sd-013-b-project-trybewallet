import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import loginAction from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      enable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.verifyEmail = this.verifyEmail.bind(this);
    this.verifyPassword = this.verifyPassword.bind(this);
  }

  login() {
    const { login, history } = this.props;
    const { email } = this.state;
    if (this.verifyEmail()) {
      login(email);
      history.push('/carteira');
    }
  }

  verifyEmail() {
    const { email } = this.state;
    if (email.includes('@') && email.includes('.com')) {
      return true;
    }
    return false;
  }

  verifyPassword(password) {
    const min = 5;
    if (password.length > min) return true;
    return false;
  }

  handleChange({ target }) {
    if (this.verifyPassword(target.value) && this.verifyEmail(target.value)) {
      this.setState({
        enable: false,
      });
    } else {
      this.setState({
        enable: true,
      });
    }
    this.setState({
      [target.id]: target.value,
    });
  }

  render() {
    const { email, password, enable } = this.state;
    return (
      <div>
        <input
          id="email"
          type="text"
          value={ email }
          data-testid="email-input"
          onChange={ this.handleChange }
        />

        <input
          id="password"
          type="text"
          data-testid="password-input"
          onChange={ this.handleChange }
          value={ password }
        />

        <button disabled={ enable } type="button" onClick={ this.login }>Entrar</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  login: propTypes.func.isRequired,
  history: propTypes.objectOf(propTypes.func).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
