import React from 'react';

class Login extends React.Component {
  render() {
    // return <div>Login</div>;
    return (
      <div>
        <h1>
          Login
        </h1>
        <form>
          <label htmlFor="email">
            Email
            <input data-testid="email-input" type="text" id="email" />
          </label>
          <label htmlFor="password">
            Password
            <input data-testid="password-input" type="text" id="password" />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
