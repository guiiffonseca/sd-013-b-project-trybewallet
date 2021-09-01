import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import userLogin from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  emailValidation() {}

  handleLogin({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const userEmail = this.props;
    const minLength = 6;

    const emailIsValid = () => {
      const validationRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      const validEmail = validationRegex.test(email);
      return validEmail;
    };

    const passwordValidator = password.length >= minLength;

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
            disabled={ !(emailIsValid() && passwordValidator) }
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

export default connect(null, mapDispatchtoProps)(Login);

/* 2. Realize as seguintes verificações nos campos de email, senha e botão:
O email está no formato válido, como 'alguem@alguem.com'.

A senha possui 6 ou mais caracteres.

Salve o email no estado da aplicação, com a chave email, assim que a pessoa usuária logar.

A rota deve ser mudada para '/carteira' após o clique no botão 'Entrar'.

O que será testado:

- O botão de "Entrar" está desabilitado ao entrar na página
- O botão de "Entrar está desabilitado quando um email inválido é digitado
- O botão de "Entrar" está habilitado quando um email e uma senha válidos são passados */
