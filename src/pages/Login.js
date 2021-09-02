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
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;

    return (
      <form>
        <fieldset>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
              required
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
              data-testid="password-input"
              required
            />
          </label>
          <button type="button">
            Entrar
          </button>
        </fieldset>
      </form>
    );
  }
}

export default Login;
