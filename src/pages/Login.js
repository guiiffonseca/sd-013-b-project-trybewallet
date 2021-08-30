import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label
          htmlFor="email"
        >
          <input
            type="email"
            name="name"
          />
        </label>
        <label
          htmlFor="password"
        >
          <input
            type="password"
            name="password"
          />
        </label>
      </form>
    );
  }
}

export default Login;
