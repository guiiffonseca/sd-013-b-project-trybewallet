import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            value={ email }
            data-testid="email-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            value={ password }
            data-testid="password-input"
            type="text"
            name="password"
            id="password"
            placeholder="******"
            onChange={ this.handleChange }
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default Login;
