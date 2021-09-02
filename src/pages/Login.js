import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      validateEmail: false,
      validatePassword: false,
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  // handleChange({ target }) {
  //   const { name, value } = target;
  //   this.setState({ [name]: value });
  // }

  // solução usada para validação do email com regex
  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  handleEmail({ target: { value } }) {
    const emailRegex = /\S+@\S+\.\S+/;
    const validateEmail = emailRegex.test(value);

    this.setState({ email: value, validateEmail });
  }

  handlePassword({ target: { value } }) {
    const PASSWORD_LENGTH = 6;
    const validatePassword = value.length >= PASSWORD_LENGTH;

    this.setState({ password: value, validatePassword });
  }

  render() {
    const { email, password, validateEmail, validatePassword } = this.state;

    return (
      <form>
        <fieldset>
          <label htmlFor="emailInput">
            Email:
            <input
              type="email"
              name="email"
              id="emailInput"
              value={ email }
              onChange={ this.handleEmail }
              data-testid="email-input"
              required
            />
          </label>
          <label htmlFor="passwordInput">
            Senha:
            <input
              type="password"
              name="password"
              id="passwordInput"
              value={ password }
              onChange={ this.handlePassword }
              data-testid="password-input"
              required
            />
          </label>
          <button type="button" disabled={ !validateEmail || !validatePassword }>
            Entrar
          </button>
        </fieldset>
      </form>
    );
  }
}

export default Login;
