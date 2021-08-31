import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email
            <input type="email" name="email" data-testid="email-input" required />
          </label>
          <label htmlFor="senha">
            Senha
            <input
              type="password"
              nama="senha"
              data-testid="password-input"
              minLength="6"
              required
            />
          </label>
          <button type="submit" name="entrar" value="Entrar">Entrar</button>
        </form>
      </div>);
  }
}

export default Login;
