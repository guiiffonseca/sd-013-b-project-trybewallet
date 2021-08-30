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

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const passwordLengthMin = 6;
    const checkEmail = () => {
      const entries = /\S+@\S+\.\S+/;
      const checkEntries = entries.test(email);
      return checkEntries;
    };
    const checkPassword = password.length >= passwordLengthMin;
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            value={ email }
            id="email"
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            value={ password }
            id="password"
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          disabled={ !(checkEmail() && checkPassword) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;

//  https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
