import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonDisabled: true,
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkButton = this.checkButton.bind(this);
  }

  componentDidUpdate() {
    this.checkButton();
  }

  checkButton() {
    const { email, password, buttonDisabled } = this.state;
    // **Source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript **//
    const checkEmail = /\S+@\S+\.\S+/;
    const MIN_PASS_LENGTH = 6;
    if (checkEmail.test(email) && password.length >= MIN_PASS_LENGTH && buttonDisabled) {
      this.setState({ buttonDisabled: false });
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
    this.setState({ buttonDisabled: true });
  }

  render() {
    const { buttonDisabled } = this.state;
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <div>
            <input
              data-testid="email-input"
              type="email"
              name="email"
              onChange={ this.handleChange }
              placeholder="email"
            />
            <input
              data-testid="password-input"
              type="password"
              name="password"
              onChange={ this.handleChange }
              placeholder="senha"
            />
          </div>
          <button type="submit" disabled={ buttonDisabled }> Entrar </button>
        </form>
      </div>
    );
  }
}

export default Login;
