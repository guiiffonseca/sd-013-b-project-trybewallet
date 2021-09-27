import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // verifyEmail(email) {
  //   const regex = /(.*)@(.*).com/;
  //   return regex.test(email);
  // }

  // verifyPassword(password) {
  //   const MIN_LENGTH_PASSWORD = 6;
  //   (password.length >= MIN_LENGTH_PASSWORD);
  // }

  // loginValidator({ email, password }) {
  //   return verifyEmail(email) && verifyPassword(password);
  // }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    // const history = useHistory()
    const { history } = this.props;
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const PASSWORD_LENGTH = 6;
    let valid = true;
    if (email.includes('@' && '.com') && password.length >= PASSWORD_LENGTH) {
      valid = false;
    } else {
      valid = true;
    }

    return (
      <div>
        <form>
          <input
            type="text"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
          <button
            onClick={ this.handleClick }
            disabled={ valid }
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
