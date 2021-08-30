import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    console.log('cliquei');
  }

  handleChange(event) {
    const { email, password } = this.state;
    console.log(email, password);
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <fieldset>
        <legend>Entre com sua conta</legend>
        <label htmlFor="email">
          Login
          <input
            id="email"
            type="email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            id="password"
            type="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button type="button" onClick={ this.onSubmit }>Entrar</button>
      </fieldset>
    );
  }
}

export default Login;
