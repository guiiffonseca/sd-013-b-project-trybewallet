import React from 'react';
// import { connect } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Buttons';
// import { user } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, type, value } = target;
    const elementValue = type === 'checkbox' ? 'checked' : value;
    this.setState({ [name]: elementValue });
  }

  handleSubmit() {}

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <fieldset>
            <legend>Log in</legend>
            <Input
              type="email"
              name="email"
              data-testid="email-input"
              placeholder="email"
              value={ email }
              onChange={ this.handleChange }
              required
            />
            <Input
              type="password"
              name="password"
              data-testid="password-input"
              placeholder="name"
              value={ password }
              onChange={ this.handleChange }
              required
            />
            <Button name="Send" onClick={ this.handleSubmit } />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Login;
