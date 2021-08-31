import React from 'react';
import { Input, Button } from '../components/Index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // email: '',
      // password: '',
      validEmail: false,
      validPassword: false,
      disableButton: true,
    };

    this.enableOrDisableButton = this.enableOrDisableButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  enableOrDisableButton() {
    const { validEmail, validPassword } = this.state;

    this.setState({
      disableButton: (!validEmail || !validPassword),
    });
  }

  handleChange({ target }) {
    // console.log(target.minLength);
    // console.log(target.value.length);
    // console.log(target.checkValidity());

    this.setState({
      [target.name]: target.value,
      [target.id]: target.checkValidity(),
    });

    this.enableOrDisableButton();
  }

  render() {
    const { disableButton } = this.state;

    return (
      <div className="login-card">
        <Input
          testid="email-input"
          type="email"
          name="email"
          id="validEmail"
          label="E-mail"
          change={ this.handleChange }
        />

        <Input
          testid="password-input"
          type="password"
          name="password"
          id="validPassword"
          label="Password"
          change={ this.handleChange }
          minLength={ 6 }
        />

        <Button
          label="Entrar"
          disable={ disableButton }
        />
      </div>
    );
  }
}

export default Login;
