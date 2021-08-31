import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <label className="label-login" htmlFor="email">
          <input
            id="email"
            type="text"
            name="email"
            value={ email }
            data-testid="email-input"
          />
          Senha
          <input
            id="password"
            name="password"
            value={ password }
            data-testid="password-input"
          />
          Email
          <button
            type="button"
          >
            Entrar
          </button>
        </label>
      </div>
    );
  }
}

export default Login;
