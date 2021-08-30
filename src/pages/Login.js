import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { submitLogin } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validLogin: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
  }

  onSubmitLogin() {
    const { history, valueLogin } = this.props;
    valueLogin(this.state);
    history.push('/carteira');
  }

  validatePassword() {
    const { password } = this.state;
    const MIN_LENGTH = 6;

    if (password.length >= MIN_LENGTH) {
      this.setState({
        validLogin: true,
      });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validatePassword());
  }

  render() {
    const { email, password, validLogin } = this.state;
    const checkEmail = () => {
      const regexEmail = /\S+@\S+\.\S+/;
      const check = regexEmail.test(email);
      return check;
    };
    return (
      <form>
        <Input
          name="email"
          type="email"
          id="email"
          value={ email }
          placeholder="exemplo@exemplo.com"
          testId="email-input"
          onChange={ this.handleChange }
        />
        <Input
          name="password"
          type="password"
          id="password"
          value={ password }
          placeholder="senha"
          testId="password-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ !validLogin || !checkEmail() }
          onClick={ this.onSubmitLogin }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  valueLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  valueLogin: (email) => dispatch(submitLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);

// validacao do email exemplo pego em https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
