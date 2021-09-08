import React from 'react';
import { Link } from 'react-router-dom';
import store from '../store';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    // const button = target.parentNode.lastChild;
    // const { email, password } = this.state;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    console.log(store.getState());
  }

  render() {
    const { email, password } = this.state;
    const MIN_PASSWORD = 6;
    return (
      <div>
        <form>
          <input
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ this.handleChange }
            value={ email }
          />
          <br />
          <input
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ this.handleChange }
            value={ password }
          />
          <br />
          <Link to="/carteira">
            <button
              type="button"
              id="input-button"
              onClick={ this.handleClick }
              disabled={ !/\S+@\S+\.\S+/.test(email) || password.length < MIN_PASSWORD }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
