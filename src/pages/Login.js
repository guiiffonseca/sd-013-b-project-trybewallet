import React from 'react';
import { Link } from 'react-router-dom';
import InputComponent from '../components/InputComponent';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      userValidation: false,
      passwordValidation: false,
    };

    this.checkEmail = this.checkEmail.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
  }

  checkEmail({ target }) {
    const { value } = target;
    // Regex fonte https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const emailRegex = /\S+@\S+\.\S+/;
    const userValidation = emailRegex.test(value);
    this.setState({
      email: value,
      userValidation,
    });
  }

  checkPassword({ target }) {
    const { value } = target;
    const minPassword = 6;
    this.setState({
      password: value,
      passwordValidation: value.length >= minPassword,
    });
  }

  render() {
    const { email, password, userValidation, passwordValidation } = this.state;
    return (
      <>
        <div>Login</div>
        <InputComponent
          label="Email"
          type="text"
          name="email"
          datatestid="email-input"
          value={ email }
          onChange={ this.checkEmail }
        />
        <InputComponent
          label="Password"
          type="password"
          name="password"
          datatestid="password-input"
          value={ password }
          onChange={ this.checkPassword }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !(userValidation && passwordValidation) }
          >
            Entrar
          </button>
        </Link>
      </>
    );
  }
}

export default Login;
