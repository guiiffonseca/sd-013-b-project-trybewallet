import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { buttonLogin as buttonLoginEvent } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isValid: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.verificaLogin = this.verificaLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    },
    () => {
      this.verificaLogin();
    });
  }

  verificaLogin() {
    const { email, password } = this.state;

    const emailValid = email.includes('@') && email.includes('.com');
    const cinco = 5;
    const passwordValid = password.length > cinco;

    if (emailValid && passwordValid) {
      this.setState({ isValid: false });
    } else {
      this.setState({ isValid: true });
    }
  }

  handleClick() {
    const { buttonLogin } = this.props;
    const { email, password } = this.state;

    buttonLogin({ email, password });
  }

  render() {
    const { handleChange, handleClick } = this;
    const { isValid, email, password } = this.state;
    return (
      <form>
        <label htmlFor="login-email">
          Email:
          <input
            id="login-email"
            name="email"
            type="email"
            value={ email }
            onChange={ handleChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="login-password">
          Senha:
          <input
            data-testid="password-input"
            id="login-password"
            type="password"
            name="password"
            value={ password }
            onChange={ handleChange }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            value="Entrar"
            onClick={ handleClick }
            disabled={ isValid }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

Login.propTypes = {
  buttonLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  buttonLogin: (payload) => dispatch(buttonLoginEvent(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
