import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
    this.state = {
      email: '',
      senha: '',
      // button: 'true',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleDisabled() {
    const { senha, email } = this.state;
    const rgx = /\S+@\S+\.\S+/;
    const lengthPassword = 5;
    if (rgx.test(email) && senha.length > lengthPassword) {
      return true;
    }
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div>
        <fieldset>
          Email
          <input
            onChange={ this.handleChange }
            data-testid="email-input"
            value={ email }
            name="email"
            type="email"
            label="email"
          />
          Senha
          <input
            onChange={ this.handleChange }
            data-testid="password-input"
            value={ senha }
            name="senha"
            type="password"
          />
          <button
            type="submit"
            label="button"
            disabled={ !this.handleDisabled() }
          >
            Entrar
          </button>
        </fieldset>
      </div>
    );
  }
}

export default Login;
