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

  handleChange({ target }) {
    const { name, value } = target;
    // const button = target.parentNode.lastChild;
    // const { email, password } = this.state;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const MIN_PASSWORD = 6;
    return (
      <div>
        <form>
          <input
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ this.handleChange }
            value={ email }
          />
          <br />
          <input
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ this.handleChange }
            value={ password }
          />
          <br />
          <button
            type="button"
            id="input-button"
            disabled={ !/\S+@\S+\.\S+/.test(email) || password.length < MIN_PASSWORD }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
