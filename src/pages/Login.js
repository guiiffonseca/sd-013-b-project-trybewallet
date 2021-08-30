import React from 'react';
import Input from '../components/Input';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div>
        <Input
          name="email"
          type="email"
          id="email"
          value={ email }
          testId="email-input"
          onChange={ this.handleChange }
        />
        <Input
          name="password"
          type="password"
          id="password"
          value={ senha }
          placeholder="senha"
          testId="password-input"
          onChange={ this.handleChange }
        />
      </div>
    );
  }
}

export default Login;
