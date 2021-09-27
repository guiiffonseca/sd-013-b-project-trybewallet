import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  verifyEmail(email) {
    const regex = /(.*)@(.*).com/;
    return regex.test(email);
  };

  verifyPassword = (password) => {
    const MIN_LENGTH_PASSWORD = 6;
    (password.length >= MIN_LENGTH_PASSWORD)
  };
  
  loginValidator = ({ email, password }) => (
    verifyEmail(email) && verifyPassword(password)
  );

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <form>
          <input
            type="text"
            name="email-input"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password-input"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}
