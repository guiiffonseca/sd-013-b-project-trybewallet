import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      ableButton: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onclick = this.onclick.bind(this);
  }

  onclick() {
    // const { email, senha } = this.state;
    // console.log(email);
    // console.log(senha);
  }

  handleChange({ target }) {
    const { email } = this.state;
    const condition = 4;
    // console.log(ableButton);
    const able = email.length < condition;
    this.setState({
      [target.name]: target.value,
      ableButton: able,
    });
  }

  render() {
    const { email, senha, ableButton } = this.state;
    return (
      <div>
        <input
          name="email"
          value={ email }
          onChange={ this.handleChange }
          data-testid="email-input"
          type="text"
          placeholder="Email"
        />
        <input
          name="senha"
          value={ senha }
          onChange={ this.handleChange }
          data-testid="password-input"
          type="text"
          placeholder="Senha"
        />
        <button
          disabled={ ableButton }
          onClick={ this.onclick }
          type="button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
