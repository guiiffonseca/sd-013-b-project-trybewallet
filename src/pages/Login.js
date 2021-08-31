import React from 'react';

const VALID_EMAIL = 'alguem@email.com';
const VALID_PASSWORD = '123456';

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
    const { type, value } = target;
    this.setState({ [type]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email-input">
            Email
            <input
              type="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password-input">
            Senha
            <input
              type="password"
              value={ password }
              onChange={ this.handleChange }
              data-testid="password-input"
            />
          </label>
          <button
            type="button"
            disabled={ !(VALID_PASSWORD === password && VALID_EMAIL === email) }
          >
            Entrar
          </button>
        </form>
      </div>);
  }
}

export default Login;
