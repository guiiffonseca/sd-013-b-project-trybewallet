import React from 'react';
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

  async handleChange({ target }) {
    const { name, value } = target;
    await this.setState({
      [name]: value,
    });
    this.verificaLogin();
  }

  verificaLogin() {
    const { email, password } = this.state;

    const emailValid = (email.includes('@') && email.includes('.com'));
    const cinco = 5;
    const passwordValid = (password.length > cinco);
    console.log(emailValid, passwordValid, email, password);

    if (emailValid && passwordValid) {
      this.setState({ isValid: false });
    } else {
      this.setState({ isValid: true });
    }
  }

  handleClick() {
    const { history, buttonLogin } = this.props;
    const { email, password } = this.state;

    buttonLogin({ email, password });
    history.push('/carteira');
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
        <div>
          <button
            type="button"
            onClick={ handleClick }
            disabled={ isValid }
          >
            Entrar
          </button>
        </div>
      </form>
    );
  }
}

Login.propTypes = {
  buttonLogin: PropTypes.func.isRequired,
  history: PropTypes.objectOf().isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  buttonLogin: (payload) => dispatch(buttonLoginEvent(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
