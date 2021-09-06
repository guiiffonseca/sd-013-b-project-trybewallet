import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.verificaLogin = this.verificaLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.verificaLogin();
  }

  verificaLogin() {
    const { email, password } = this.state;
    // console.log(email, password);
    const emailValid = (email.includes('@') && email.includes('.com'));
    const cinco = 5;
    const passwordValid = (password.length > cinco);
    // console.log(emailValid);
    // console.log(passwordValid);
    if (emailValid && passwordValid) {
      this.setState({ isValid: true });
    }
  }

  render() {
    const { handleChange } = this;
    const { isValid, email, password } = this.state;
    return (
      <form>
        <label htmlFor="login-email">
          Email:
          <input
            id="login-email"
            name="email"
            type="email"
            value={ email }
            onChange={ handleChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="login-password">
          Senha:
          <input
            id="login-password"
            type="password"
            name="password"
            value={ password }
            onChange={ handleChange }
            data-testid="password-input"
          />
        </label>
        <div>
          <button
            type="button"
            disabled={ !isValid }
          >
            Entrar
          </button>
        </div>
      </form>
    );
  }
}

export default Login;
