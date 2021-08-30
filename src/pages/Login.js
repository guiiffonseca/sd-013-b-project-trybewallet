import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      user: '',
    };
  }

  render() {
    const { user } = this.state;
    return (
      <form>
        <label htmlFor="use">
          Insira um e-mail
          <input
            type="email"
            id="user"
            name="user"
            defaultvalue={ user }
            data-testid="email-input"

          />
          <input
            type="email"
            data-testid="password-input"
            minLength="6"
            required
          />
          <button type="button" data-testid="my-action">Entrar</button>
        </label>

      </form>);
  }
}

export default Login;
