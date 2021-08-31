import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disablEmail: false,
      disabPassword: false,
    };
    this.handlerChengeEmail = this.handlerChengeEmail.bind(this);
    this.handlerChengePassword = this.handlerChengePassword.bind(this);
  }
  // ref:https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/

  handlerChengeEmail(event) {
    const validEmail = /\S+@\S+\.\S+/;
    const disablEmail = validEmail.test(event.target.value);
    this.setState({
      email: event.target.value,
      disablEmail,

    });
  }

  handlerChengePassword(event) {
    const lengthWord = 6;
    const disabPassword = event.target.value.length >= lengthWord;

    this.setState({
      password: event.target.value,
      disabPassword,
    });
  }

  render() {
    const { email, password, disabPassword, disablEmail } = this.state;
    return (
      <div>
        <h1>Fazer o Login</h1>
        <form className=".forms">
          <fieldset className="fieldset">
            <label htmlFor="email">
              Digite o Email:
              <input
                type="email"
                data-testid="email-input"
                name="email"
                id="email"
                value={ email }
                onChange={ this.handlerChengeEmail }
              />
            </label>
            <label htmlFor="senha">
              Digite a Senha:
              <input
                type="password"
                data-testid="password-input"
                name="password"
                id="senha"
                minLength="6"
                value={ password }
                onChange={ this.handlerChengePassword }
              />
            </label>
            <button type="submit" disabled={ (!disabPassword || !disablEmail) }>
              Entrar
            </button>
          </fieldset>

        </form>
      </div>
    );
  }
}

export default Login;
