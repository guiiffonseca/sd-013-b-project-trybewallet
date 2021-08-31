import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.handelChange = this.handelChange.bind(this);
  }

  handelChange() {

  }

  render() {
    return (
      <form>
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            data-testid="email-input"
            onChange={ this.handelChange }
            placeholder="email"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            data-testid="password-input"
            placeholder="password"
          />
        </label>
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
