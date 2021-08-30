import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from '../components/Input';
import { setEmail as setEmailAction } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
      validEmail: false,
      validPassword: false,
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleEmail({ target }) {
    const emailInput = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    const validEmail = emailInput.test(target.value);

    this.setState({
      email: target.value,
      validEmail,
    });
  }

  handlePassword({ target: { value } }) {
    const MIN_SENHA = 6;
    const validPassword = value.length >= MIN_SENHA;

    this.setState({
      senha: value,
      validPassword,
    });
  }

  handleClick() {
    const { history, setEmail } = this.props;
    const { email } = this.state;

    setEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, senha, validEmail, validPassword } = this.state;
    return (
      <div className="Login">
        <Input
          data-testid="email-input"
          id="email"
          name="email"
          type="email"
          onChange={ this.handleChange }
          placeholder="email@example.com"
          value={ email }
        />
        <Input
          data-testid="password-input"
          id="senha"
          name="senha"
          type="password"
          onChange={ this.handlePassword }
          placeholder="senha"
          value={ senha }
        />
        <button
          disabled={ !validEmail || !validPassword }
          type="button"
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  setEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(setEmailAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
