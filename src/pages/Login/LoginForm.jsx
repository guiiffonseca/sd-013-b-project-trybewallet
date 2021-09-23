import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  render() {
    const { email, password,
      handleChange,
      handleClick } = this.props;
    const MIN_PASSWORD = 6;
    return (
      <form>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          onChange={ handleChange }
          value={ email }
        />
        <br />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          onChange={ handleChange }
          value={ password }
        />
        <br />
        <Link to="/carteira">
          <button
            type="button"
            id="input-button"
            onClick={ handleClick }
            disabled={ !/\S+@\S+\.\S+/.test(email) || password.length < MIN_PASSWORD }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default LoginForm;
