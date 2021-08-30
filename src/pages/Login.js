import React from 'react';
import Button from '../components/Button';
import Input from '../components/Inputs';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handlePassword({ target: { value } }) {
    const passwordCondition = 6;
    return value.length >= passwordCondition;
  }

  handleClick() {
    console.log('a');
  }

  render() {

    return (
      <div>
        <h1>Login</h1>
        <Input
          type="email"
          testId="email-input"
          text="Email"
          name="email"
          handleChange={ this.handleChange }
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
        />
      </div>
    );
  }
}

export default Login;
