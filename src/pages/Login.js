import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;

    return (
      <form className="login-container">
        <input
          data-testid="email-input"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={ email }
          onChange={ this.onChange }
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={ password }
          onChange={ this.onChange }
        />
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default Login;
