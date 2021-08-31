import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailInput: '',
      passwordInput: 0,
      disable: true,
    };

    this.holdFieldValue = this.holdFieldValue.bind(this);
    this.activatesLoginButton = this.activatesLoginButton.bind(this);
  }

  holdFieldValue(name, value) {
    this.setState({
      [name]: value,
    }, () => this.activatesLoginButton());
  }

  verifyEmailFormat() {
    const { emailInput } = this.state;
    const isTrueOrFalse = emailInput.includes('@') && emailInput.endsWith('.com');
    return isTrueOrFalse;
  }

  verifyPasswordLength() {
    const { passwordInput } = this.state;
    const minimunPasswordLength = 6;
    return passwordInput >= minimunPasswordLength;
  }

  activatesLoginButton() {
    const email = this.verifyEmailFormat();
    const password = this.verifyPasswordLength();
    if (email && password) {
      this.setState({
        disable: false,
      });
    } else {
      this.setState({
        disable: true,
      });
    }
  }

  renderFormFields() {
    const { disable } = this.state;
    return (
      <form>
        <input
          data-testid="email-input"
          placeholder="E-mail"
          name="emailInput"
          onChange={ ({ target }) => this.holdFieldValue(target.name, target.value) }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Senha"
          name="passwordInput"
          onChange={ ({ target }) => this
            .holdFieldValue(target.name, target.value.length) }
        />
        <button type="button" disabled={ disable }>Entrar</button>
      </form>
    );
  }

  render() {
    return this.renderFormFields();
  }
}

export default Login;
