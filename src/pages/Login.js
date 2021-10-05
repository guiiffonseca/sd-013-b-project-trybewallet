import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateEmail } from '../actions';

const caracterEmail = (email) => {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (regex.test(email)) return true;
  return false;
};

const quantPassword = (password) => {
  const passwordMin = 6;
  if (password.length >= passwordMin) return true;
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      EmailValid: false,
      PasswordValid: false,
    };

    this.HandleButton = this.HandleButton.bind(this);
    this.HandleLogin = this.HandleLogin.bind(this);
  }

  HandleButton(e) {
    e.preventDefault();
    const { history, login } = this.props;
    const { email } = this.state;
    history.push('/carteira');
    login(email);
  }

  HandleLogin(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (name === 'email' && caracterEmail(value)) {
      this.setState({ EmailValid: true });
    }
    if (name === 'password' && quantPassword(value)) {
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
              data-testid="email-input"
              name="email"
              placeholder="Login"
              onChange={ (e) => this.HandleLogin(e) }
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={ (e) => this.HandleLogin(e) }
              data-testid="password-input"
            />
          </label>
          <button
            type="button"
            disabled={ !EmailValid || !PasswordValid }
            onClick={ this.HandleButton }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(updateEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
