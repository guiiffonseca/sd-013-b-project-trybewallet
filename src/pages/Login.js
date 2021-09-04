import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      button: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateButton = this.validateButton.bind(this);
    this.changeRoute = this.changeRoute.bind(this);
  }

  validateButton() {
    const passwordLength = 5;
    const { email, password } = this.state;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    const buttonSelector = document.querySelector('#button');
    if (regex.test(email) && password.length >= passwordLength) {
      buttonSelector.removeAttribute('disabled');
    } else {
      buttonSelector.setAttribute('disabled', true);
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
    this.validateButton();
  }

  changeRoute() {
    return (
      <Redirect to="/carteira" />
    );
  }

  render() {
    const { email, password, button } = this.state;
    return (
      <div>
        <label htmlFor="email-input">
          <input
            type="email"
            data-testid="email-input"
            name="email"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>
        <label htmlFor="password-input">
          <input
            type="password"
            data-testid="password-input"
            name="password"
            onChange={ this.handleChange }
            value={ password }
          />
        </label>
        <button
          type="submit"
          data-testid="login-button"
          onClick={ () => this.changeRoute() }
          id="button"
          disabled
        >
          Entrar
        </button>

      </div>
    );
  }
}

export default Login;
