import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { emailLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  validateLogin() {
    // Retirado de https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const { email, password } = this.state;
    const re = /\S+@\S+\.\S+/;
    const minSize = 6;
    if (password.length >= minSize && re.test(email)) {
      return true;
    }
  }

  submitEmail() {
    const { loginData } = this.props;
    const { email } = this.state;
    loginData(email);
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form>
          <label htmlFor="email-input">
            Email
            <input
              type="email"
              name="email"
              value={ email }
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            Senha
            <input
              type="password"
              name="password"
              value={ password }
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
          <Link to="/carteira">
            <button
              type="submit"
              disabled={ !this.validateLogin() }
              onClick={ this.submitEmail() }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginData: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginData: (email) => dispatch(emailLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
