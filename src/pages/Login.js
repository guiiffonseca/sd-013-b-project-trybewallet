import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <div>
        <form>
          <input type="email" data-testid="email-input" />
          <input type="password" data-testid="password-input" />
          <button type="button">Entrar</button>
        </form>
      </div>);
  }
}

export default Login;
