import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logInStore as logInStoreAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveInGlobalState = this.saveInGlobalState.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  saveInGlobalState() {
    const { logInStore } = this.props;
    const { email, password } = this.state;
    logInStore({ email, password });
  }

  render() {
    const { email, password } = this.state;
    const minPasswordLength = 5;
    return (
      <div id="login-div">
        <fieldset>
          <label htmlFor="email-input">
            E-mail:
            <input
              type="text"
              id="email-input"
              data-testid="email-input"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            Password:
            <input
              type="password"
              id="password-input"
              data-testid="password-input"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <Link to="/carteira">
            <button
              type="button"
              disabled={ !(email.includes('@')
            && email.includes('.com') && password.length > minPasswordLength) }
              onClick={ this.saveInGlobalState }
            >
              Entrar
            </button>
          </Link>
        </fieldset>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logInStore: (payload) => dispatch(logInStoreAction(payload)),
});

Login.propTypes = {
  logInStore: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
