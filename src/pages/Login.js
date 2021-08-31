import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      emailValid: false,
      passwordValid: false,
    };

    this.handleInputs = this.handleInputs.bind(this);
    this.handleEnabled = this.handleEnabled.bind(this);
  }

  handleInputs(event) {
    const { target } = event;
    const emailValid = 'emailValid';
    const passwordValid = 'passwordValid';

    this.setState({
      [target.name]: target.value,
    });

    const { email, password } = this.state;
    const numberSix = 6;

    this.setState({
      [emailValid]: email.includes('@' && '.'),
      [passwordValid]: password.length >= numberSix,
    });
  }

  handleEnabled() {
    const { email, password } = this.state;
    const validEmail = email.includes('@') && email.includes('.com');
    const numberSix = 6;
    const validPassword = password.length > numberSix;

    return validEmail && validPassword;
  }

  render() {
    const { email, password, emailValid, passwordValid } = this.state;

    return (
      <div>
        <h2>Login</h2>
        <fieldset>
          <label htmlFor="email">
            Email:
            <input
              data-testid="email-input"
              name="email"
              type="email"
              value={ email }
              onChange={ this.handleInputs }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              data-testid="password-input"
              name="password"
              type="password"
              value={ password }
              onChange={ this.handleInputs }
            />
          </label>

          <Link to="/carteira">
            <button
              type="submit"
              disabled={ !(emailValid && passwordValid) }
            >
              Entrar
            </button>
          </Link>

        </fieldset>
      </div>

    );
  }
}

export default connect()(Login);
