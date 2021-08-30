import React from 'react';
import { connect } from 'react-redux';
import { ClickButtonLogin as ClickButtonLoginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      button: true,
      passwordOK: false,
      emailOK: false,
    };
    const { email, password, button } = this.state;
    console.log(email + password + button);
    this.StateChangeEmail = this.StateChangeEmail.bind(this);
    this.StateChangePassword = this.StateChangePassword.bind(this);
    this.verificaButton = this.verificaButton.bind(this);
    this.ClickButton = this.ClickButton.bind(this);
  }

  StateChangeEmail(event) {
    const { value } = event.target;

    this.setState(({
      email: value,
    }));

    if (value.includes('@' && '.com')) {
      this.setState(({
        emailOK: true,
      }));
    }
    this.verificaButton();
  }

  StateChangePassword(event) {
    const { value } = event.target;
    const QuatidadeDigitos = 5;

    this.setState(({
      password: value,
    }));

    if (value.length >= QuatidadeDigitos) {
      this.setState(({
        passwordOK: true,
      }));
    }
    this.verificaButton();
  }

  verificaButton() {
    const { passwordOK, emailOK } = this.state;
    if (passwordOK === true && emailOK === true) {
      this.setState(({
        button: false,
      }));
    }
  }

  ClickButton() {
    const { history, ClickButtonLogin } = this.props;
    const { email } = this.state;
    ClickButtonLogin(email);

    history.push('/carteira');
  }

  render() {
    const { button } = this.state;
    return (
      <div>

        <input
          data-testid="email-input"
          type="email"
          name="email"
          onChange={ this.StateChangeEmail }
          required
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          onChange={ this.StateChangePassword }
          required
        />

        <button
          type="button"
          onClick={ this.ClickButton }
          disabled={ button }
        >
          Entrar
        </button>

      </div>
    );
  }
}

function MapDispatchToProps(dispatch) {
  return {
    ClickButtonLogin: (email) => dispatch(ClickButtonLoginAction(email)),
  };
}

export default connect(null,MapDispatchToProps)(Login);
