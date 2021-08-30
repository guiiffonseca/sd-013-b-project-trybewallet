import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input
            data-testid="email-input"
            type="text"
            name="email"
            onChange={ ({ target: { name, value } }) => this.setState({ [name]: value }) }
            placeholder="email"
          />
          <input
            data-testid="password-input"
            type="password"
            name="password"
            onChange={ ({ target: { name, value } }) => this.setState({ [name]: value }) }
            placeholder="senha"
          />
        </div>
        <input
          type="button"
          value="Entrar"
        />
      </div>
    );
  }
}

export default Login;
