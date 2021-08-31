import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input
          data-testid="email-input"
          type="email"
          onChange={ this.handleLogin }
          placeholder="insira seu email"
          required
        />
        <input
          data-testid="password-input"
          type="password"
          onChange={ this.handleLogin }
          placeholder="insira sua senha"
          required
        />
        <button
          type="button"
        >
          Entrar
        </button>
      </div>);
  }
}

export default Login;

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
