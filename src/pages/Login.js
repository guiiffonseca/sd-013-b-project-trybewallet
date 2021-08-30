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
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.enableButton();
  }

  enableButton() {
    const { email, password } = this.state;
    const passwordMinLength = 5;
    const emailIsValid = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
    const enable = emailIsValid.test(email) && password.length >= passwordMinLength;
    this.setState({ buttonDisabled: !enable });
  }

  render() {
    const { email, password, buttonDisabled } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              onChange={ this.handleChange }
              value={ email }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              name="password"
              data-testid="password-input"
              onChange={ this.handleChange }
              value={ password }
              minLenght="6"
            />
          </label>
          <button
            disabled={ buttonDisabled }
            type="button"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
