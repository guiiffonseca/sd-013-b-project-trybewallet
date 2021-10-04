import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              value={ email }
              id="email"
              placeholder="Login"
              onChange={ this.handleChange }
              data-testid="email-input"
              required
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              value={ password }
              id="password"
              placeholder="Password"
              onChange={ this.handleChange }
              data-testid="password-input"
              required
            />
          </label>
          <button type="button" disable="true">
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
