import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="email" data-testid="email-input" />
          <br />
          <input type="password" data-testid="password-input" />
          <br />
          <button type="button" id="input-button" disabled>Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
