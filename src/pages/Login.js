import React from 'react';
import { connect } from 'react-redux';
import userLogin from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      email: '',
    };
  }

  handleLogin({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email } = this.state;
    const userEmail = this.props;
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
        <button
          type="button"
          onClick={ () => userEmail(email) }
        >
          Entrar
        </button>
      </div>);
  }
}

const mapDispatchtoProps = (dispatch) => ({
  userEmail: (email) => dispatch(userLogin(email)),
});

export default connect(null, mapDispatchtoProps)(Login);

/* #### 1. Crie uma página inicial de login com os seguintes campos e características:

  * A rota para esta página deve ser ‘/’.

  * Você deve criar um local para que a pessoa usuária insira seu email e senha. Utilize o atributo `data-testid="email-input"` para o email e `data-testid="password-input"` para a senha.

  * Crie um botão com o texto ‘Entrar’.

  O que será testado:
  ```
  - A rota para esta página deve ser "/"
  - Existe um local para que o usuário insira seu email e senha
  - Existe um botão com o texto "Entrar"
  ``` */
