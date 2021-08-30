import React from 'react';
import Button from '../components/Button';
import Input from '../components/Inputs';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailStatus: true,
      passwordStatus: true,
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  validateEmail(email) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return false;
    }
    return true;
    // Olhei sobre o regex para email, neste link:
    // https://www.w3resource.com/javascript/form/email-validation.php
  }

  handleEmail({ target: { value } }) {
    this.setState({
      email: value,
      emailStatus: this.validateEmail(value),
    });
  }

  handlePassword({ target: { value } }) {
    const PASSWORD_CONDITION = 6;
    if (value.length >= PASSWORD_CONDITION) {
      this.setState({ passwordStatus: false });
    }
  }

  handleClick() {
    const { email } = this.state;
    console.log(email);
  }

  render() {
    const { emailStatus, passwordStatus } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <Input
          type="email"
          testId="email-input"
          text="Email"
          name="email"
          handleChange={ this.handleEmail }
        />
        <Input
          type="password"
          testId="password-input"
          text="Password"
          name="password"
          handleChange={ this.handlePassword }
        />
        <Button
          text="Entrar"
          handleClick={ this.handleClick }
          status={ emailStatus || passwordStatus }
        />
      </div>
    );
  }
}

export default Login;
