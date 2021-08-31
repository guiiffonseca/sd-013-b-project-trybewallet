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
    // const { history } = this.props;
    // history.push = '/carteira';
  }

  verifyInfos() {
    const { email, senha } = this.state;
    const condition = 6;

    if (email.includes('.com') && senha.length >= condition) {
      this.setState({
        ableButton: false,
      });
      // console.log(ableButton);
    } else {
      this.setState({
        ableButton: true,
      });
    }
  }

  handleChange({ target }) {
    const { senha } = this.state;
    // const condition = 4;
    // console.log(ableButton);
    // const able = email.length < condition;
    this.setState({
      [target.name]: target.value,
      // ableButton: this.verifyInfos(),
    }, this.verifyInfos);

    console.log(senha);
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
          type="email"
          placeholder="Email"
          required="true"
        />
        <input
          name="senha"
          value={ senha }
          onChange={ this.handleChange }
          data-testid="password-input"
          type="text"
          placeholder="Senha"
          required="true"
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
