import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      validation: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    },
    () => {
      this.checkLogin();
    });
  }

  checkLogin() {
    const { email, password } = this.state;
    const minPassLength = 6;

    if (email === 'alguem@email.com' && password.length >= minPassLength) {
      this.setState({
        validation: true,
      });
    } else {
      this.setState({
        validation: false,
      });
    }
  }

  render() {
    const { validation } = this.state;
    return (
      <header>
        <div>Login</div>
        <label htmlFor="email">
          Email:
          <input
            id="input-email"
            name="email"
            placeholder="email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            id="input-password"
            name="password"
            placeholder="password"
            data-testid="password-input"
            type="password"
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/carteira">
          <button id="send-button" type="button" disabled={ !validation }>Entrar</button>
        </Link>
      </header>
    );
  }
}

export default Login;
