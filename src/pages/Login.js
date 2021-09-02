import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userLogin from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleLogin({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const { userEmail } = this.props;
    const minLength = 6;

    const emailIsValid = () => {
      const validationRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; // source: https://www.w3resource.com/javascript/form/email-validation.php
      const validEmail = validationRegex.test(email);
      return validEmail;
    };

    const passwordIsValid = password.length >= minLength;

    return (
      <div>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          onChange={ this.handleLogin }
          placeholder="insira seu email"
          required
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          onChange={ this.handleLogin }
          placeholder="insira sua senha"
          required
        />
        <Link
          onClick={ () => (userEmail(email)) }
          to="/carteira"
        >
          <button
            type="button"
            disabled={ !(emailIsValid() && passwordIsValid) } // button disabled until passed checks
          >
            Entrar
          </button>
        </Link>
      </div>);
  }
}

const mapDispatchtoProps = (dispatch) => ({
  userEmail: (email) => dispatch(userLogin(email)),
});

Login.propTypes = {
  userEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchtoProps)(Login);
