import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: '',
      inputEmail: false,
      inputPassword: false,
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    if (name === 'email') {
      this.setState({
        [name]: value,
        inputEmail: true,
      });
    }
    if (name === 'password') {
      this.setState({
        [name]: value,
        inputPassword: true,
      });
    }
  }

  render() {
    const { email, password, inputEmail, inputPassword } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
            placeholder="exemplo@exemplo.com"
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            name="password"
            type="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            // onClick=""
            disabled={ !inputEmail || !inputPassword }
          >
            Entrar
          </button>
        </Link>
      </form>

    );
  }
}

export default Login;
