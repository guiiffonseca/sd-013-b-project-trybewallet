import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      validateEmail: false,
      password: '',
      validatePassword: false,
    };

    this.onChange = this.onChange.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  onChange({ target: { value, name } }) {
    this.validateField({ name, value });

    this.setState({
      [name]: value,
    });
  }

  validateField({ name, value }) {
    if (name === 'email') {
      const validation = value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g);

      return this.setState({
        validateEmail: !!validation,
      });
    }
    if (name === 'password') {
      const validation = value.match(/^.{6,}$/g);

      return this.setState({
        validatePassword: !!validation,
      });
    }
  }

  render() {
    const { email, password, validateEmail, validatePassword } = this.state;
    const { submit } = this.props;

    return (
      <fieldset className="login-container">
        <input
          data-testid="email-input"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={ email }
          onChange={ this.onChange }
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={ password }
          onChange={ this.onChange }
        />
        <Link to="/carteira">
          <button
            type="submit"
            disabled={ !(validateEmail && validatePassword) }
            onClick={ () => submit(email) }
          >
            Entrar
          </button>
        </Link>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submit: (email) => dispatch(login(email)),
});

Login.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
