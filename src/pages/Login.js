import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import userEmail from '../actions/userEmail';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.desabledButton = this.desabledButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  desabledButton() {
    const { email, password } = this.state;
    const limitPassword = 6;
    const testEmail = /\S+@\S+\.\S+/;
    if (password.length >= limitPassword && testEmail.test(email)) {
      return true;
    }
    return false;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <label htmlFor="email-input">
          Email
          <input
            type="email"
            data-testid="email-input"
            id="email-input"
            value={ email }
            onChange={ this.handleChange }
            name="email"
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            minLength="6"
            data-testid="password-input"
            id="password-input"
            value={ password }
            name="password"
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/carteira">
          <button type="button" disabled={ !this.desabledButton() }>
            Entrar
          </button>
        </Link>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailValid: (email) => dispatch(userEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
