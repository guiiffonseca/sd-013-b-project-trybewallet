import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { actionSaveLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.value === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });

    this.checkingInputs();
  }

  checkingInputs() {
    const { email, password } = this.state;
    const numMax = 5;
    const emailIsValid = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
    // Regex pego na internet
    const enable = emailIsValid.test(email) && password.length >= numMax;
    if (enable === true) {
      const btnLogin = document.getElementById('btnLogin');
      btnLogin.disabled = false;
    }
  }

  render() {
    const { email, password } = this.state;
    const { saveLogin } = this.props;
    return (
      <form action="">
        <label htmlFor="email-input">
          Email:
          <input
            type="email"
            data-testid="email-input"
            required
            onChange={ this.handleChange }
            name="email"
            value={ email }
          />
        </label>

        <label htmlFor="password-input">
          Password:
          <input
            type="password"
            data-testid="password-input"
            minLength="6"
            required
            onChange={ this.handleChange }
            name="password"
            value={ password }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            id="btnLogin"
            onClick={ saveLogin(email) }
            disabled="false"
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveLogin: (login) => dispatch(actionSaveLogin(login)),
});

Login.propTypes = {
  saveLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
