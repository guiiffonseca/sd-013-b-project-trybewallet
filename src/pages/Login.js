import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Input from '../components/Input';
import { setEmail as setEmailAction } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
      emailValid: false,
      passwordValid: false,
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleEmail({ target }) {
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    const emailValid = email.test(target.value);

    this.setState({
      email: target.value,
      emailValid,
    });
  }

  handlePassword({ target: { value } }) {
    const NUMBER_PASSOWORD = 6;
    const passwordValid = value.length >= NUMBER_PASSOWORD;

    this.setState({
      senha: value,
      passwordValid,
    });
  }

  handleButtonClick() {
    const { history, setEmail } = this.props;
    setEmail(this.state);
    history.push('/carteira');
  }

  render() {
    const { email, senha, emailValid, passwordValid } = this.state;
    return (
      <div className="Login">
        <Input
          dataTestid="email-input"
          id="email"
          name="email"
          type="email"
          onChange={ this.handleEmail }
          placeholder="email@example.com"
          value={ email }
        />
        <Input
          dataTestid="password-input"
          id="senha"
          name="senha"
          type="password"
          onChange={ this.handlePassword }
          placeholder="senha"
          value={ senha }
        />
        <button
          disabled={ !emailValid || !passwordValid }
          type="button"
          onClick={ this.handleButtonClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setEmail: (state) => dispatch(setEmailAction(state)),
});

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.func).isRequired,
  setEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
