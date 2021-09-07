import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEmail } from '../../actions';
import './style.css';

const checkEmail = (email) => {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (regex.test(email)) return true;
  return false;
};

const checkPassword = (password) => {
  const passwordMin = 6;
  if (password.length >= passwordMin) return true;
  return false;
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      emailValid: false,
      passwordValid: false,
    };

    this.loginHandle = this.loginHandle.bind(this);
    this.inputHandle = this.inputHandle.bind(this);
  }

  loginHandle() {
    const { history, login } = this.props;
    const { email } = this.state;
    history.push('/carteira');
    login(email);
  }

  inputHandle(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (name === 'email' && checkEmail(value)) {
      this.setState({ emailValid: true });
    }
    if (name === 'password' && checkPassword(value)) {
      this.setState({ passwordValid: true });
    }
  }

  render() {
    const { emailValid, passwordValid } = this.state;
    return (
      <div>
        <input
          data-testid="email-input"
          placeholder="Digite o email"
          name="email"
          onChange={ (e) => this.inputHandle(e) }
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Digite a senha"
          name="password"
          onChange={ (e) => this.inputHandle(e) }
        />
        <button
          type="button"
          disabled={ !emailValid || !passwordValid }
          onClick={ this.loginHandle }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(updateEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
