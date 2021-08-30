import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validLogin: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validLogin = this.validLogin.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    }, () => this.validLogin());
  }

  validLogin(value = '') {
    // regex, breve pesquisa no stack overflow em https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const validationEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const minLength = 8;
    const { email, password } = this.state;
    const validEmail = validationEmailRegex.test(email) && email.length >= minLength;
    const validationPasswordRegex = /^[a-zA-Z0-9]{6,}$/;
    const validPassword = validationPasswordRegex.test(`${password}${value}`);

    if (validEmail && validPassword) this.setState({ validLogin: true });
    else this.setState({ validLogin: false });
  }

  render() {
    const { email, password, validLogin } = this.state;
    return (
      <div>
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          name="password"
          type="password"
          value={ password }
          placeholder="senha"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <button type="button" disabled={ !validLogin }>Entrar</button>
      </div>
    );
  }
}

export default Login;
