import React from 'react';

// import Input from '../components/Input'; Não passa no teste :(
import Button from '../components/Button';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <input
            data-testid="email-input"
            type="text"
            name="email"
            value={ email }
            placeholder="Login"
            onChange={ this.handleChange }
          />

          <input
            data-testid="password-input"
            type="password"
            name="password"
            value={ password }
            placeholder="password"
            onChange={ this.handleChange }
          />

          <Button
            type="button"
            label="Entrar"
          />
        </form>
      </div>
    );
  }
}

export default Login;
