import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { enter } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      emailCtr: false,
      senhaCtr: false,
    };
    this.handleMail = this.handleMail.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.buttonSubmit = this.buttonSubmit.bind(this);
  }

  handleMail({ target: { value } }) {
    const emailCtr = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value);
    this.setState({
      email: value,
      emailCtr,
    });
  }

  handlePass({ target: { value } }) {
    const MIN_PASS_CHAR = 6;
    const senhaCtr = value.length >= MIN_PASS_CHAR;
    this.setState({
      senha: value,
      senhaCtr,
    });
  }

  buttonSubmit(event) {
    event.preventDefault();
    const { loginUser, history } = this.props;
    const { email } = this.state;
    loginUser(email);
    history.push('/carteira');
  }

  render() {
    const { email, senha, emailCtr, senhaCtr } = this.state;
    return (
      <div>
        <form>
          <h2>Login</h2>
          <label htmlFor="login-mail">
            Email
            <input
              id="login-mail"
              type="email"
              value={ email }
              onChange={ this.handleMail }
              name="email"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="login-pass">
            Senha
            <input
              id="login-pass"
              type="password"
              value={ senha }
              onChange={ this.handlePass }
              name="senha"
              data-testid="password-input"
            />
          </label>
          <button
            disabled={ !(emailCtr && senhaCtr) }
            // disabled={ !emailCtr || !senhaCtr }
            type="submit"
            onClick={ (event) => this.buttonSubmit(event) }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (value) => dispatch(enter(value)),
});

export default connect(null, mapDispatchToProps)(Login);
