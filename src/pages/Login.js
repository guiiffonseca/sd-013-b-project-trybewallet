import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    /* this.handleSubmit = this.handleSubmit.bind(this); */
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  /* handleSubmit() {
    const { email, password } = this.state;
    const btnSubmit = document.getElementById('btn__submit');
    if (email.includes('@')) {
      btnSubmit.disabled = false;
    } else {
      btnSubmit.disabled = true;
    }
  } */

  render() {
    const { email, password } = this.state;
    const N = 6;
    let enable = true;

    if (email.includes('@' && '.com') && password.length >= N) {
      enable = false;
    } else {
      enable = true;
    }
    return (
      <form onSubmit={ this.handleSubmit }>
        <h1>{email}</h1>
        <h1>{password}</h1>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            data-testid="password-input"
            type="password"
            name="password"
            minLength="8"
            placeholder="Senha"
            onChange={ this.handleChange }
          />
        </label>
        <button disabled={ enable } id="btn__submit" type="submit">Entrar</button>
      </form>
    );
  }
}

export default Login;
