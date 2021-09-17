import { Button } from 'bootstrap';
import React from 'react';
import Input from '../component/Input';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.state({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <section>
        <Input
          id="email-input"
          label="Email"
          type="email"
          name="name"
          value={ email }
          onChange={ this.handleChange }
        />

        <Input
          id="password-input"
          label="Password"
          type="password"
          name="name"
          value={ password }
          onChange={ this.handleChange }
        />

        <Button label="Enviar" onClick={ this.onSubmit } />

      </section>
    );
  }
}

export default Login;
