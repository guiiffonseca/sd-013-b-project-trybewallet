import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <input
            data-testid="email-input"
            type="text"
            onChange=""
            value=""
            name="email"
            placeholder="alguem@alguem.com"
            required
          />
          <input
            data-testid="password-input"
            type="password"
            onChange=""
            value=""
            name="password"
            placeholder="Digite sua senha"
            minLength="6"
            required
          />
          <button type="button" onClick=""> Entrar </button>
        </fieldset>
      </form>
    );
  }
}

export default Login;
