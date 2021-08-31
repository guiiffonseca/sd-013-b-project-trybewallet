import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { login as userLogin } from '../actions/index';
import '../CSS/login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      buttonIsDisabled: true,
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.enableButton();
  }

  handleClick(event) {
    event.preventDefault();
    const { history } = this.props;
    history.push('/carteira');
    const { email } = this.state;
    const { login } = this.props;
    login(email);
  }

  enableButton() {
    const { email, password } = this.state;
    const emailIsValid = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
    //expresao pesquisada aqui https://stackoverflow.com/questions/22683358/email-validation-expression-w-w-w-w-w-w-allows
    const passwordLength = 5;
    const enableButton = emailIsValid.test(email) && password.length >= passwordLength;
    this.setState({ buttonIsDisabled: !enableButton });
  }

  render() {
    const { buttonIsDisabled } = this.state;
    return (
      <form className="login-page">
        <div className="login">
          E-mail:
          <input
            type="email"
            name="email"
            placeholder="example@example.com"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
          Senha:
          <input
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            disabled={ buttonIsDisabled }
            onChange={ this.handleChange }
            onClick={ this.handleClick }
          >
          Entrar
          </button>
        </div>
      </form>
    );
  }
}

Login.propTypes = {
  login: propTypes.func,
  history: propTypes.objectOf(propTypes.func),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(userLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
