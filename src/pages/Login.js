import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateEmail } from '../actions';

const caractersEmail = (email) => {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (regex.test(email)) return true;
  return false;
};

const quantiPassword = (password) => {
  const passwordMin = 6;
  if (password.length >= passwordMin) return true;
  return false;
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      EmailValid: false,
      PasswordValid: false,
    };

    this.HandleEmail = this.HandleEmail.bind(this);
    this.HandleLogin = this.HandleLogin.bind(this);
  }

  HandleEmail() {
    const { history, login } = this.props;
    const { email } = this.state;
    history.push('/carteira');
    login(email);
  }

  HandleLogin(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (name === 'email' && caractersEmail(value)) {
      this.setState({ EmailValid: true });
    }
    if (name === 'password' && quantiPassword(value)) {
      this.setState({ PasswordValid: true });
    }
  }

  render() {
    const { EmailValid, PasswordValid } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Login"
              onChange={ this.HandleLogin }
              data-testid="email-input"
              required
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={ this.HandleLogin }
              data-testid="password-input"
              required
            />
          </label>
          <button
            type="button"
            disabled={ !(EmailValid && PasswordValid) }
            onClick={ this.HandleLogin }
            data-testid="login-submit-btn"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(updateEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
