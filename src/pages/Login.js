import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      disableButton: true,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
    this.handleButton();
  }

  handleButton() {
    const { email, password } = this.state;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const minLength = 5;
    if (validEmail.test(email) && password.length >= minLength) {
      this.setState({ disableButton: false });
    }
  }

  render() {
    const { disableButton, email, password } = this.state;
    return (
      <div>
        <input
          type="email"
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <button type="button" disabled={ disableButton }>Entrar</button>
      </div>
    );
  }
}

export default Login;
