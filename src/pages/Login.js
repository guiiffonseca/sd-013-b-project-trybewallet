import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEmail as getValidEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      emailValido: false,
      passwordValida: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.SubmitLogin = this.SubmitLogin.bind(this);
  }

  SubmitLogin(event) {
    event.preventDefault();
    const { history, getEmail } = this.props;
    const { email } = this.state;

    getEmail(email);
    history.push('/carteira');
  }

  handleChange({ target: { name, value } }) {
    const emailCharacter = /\S+@\S+\.\S+/;
    switch (name) {
    case 'email':
      this.setState({
        [name]: value,
        emailValido: emailCharacter.test(value),
      });
      break;
    case 'password':
      this.setState({
        [name]: value,
        passwordValida: value.length >= '6',
      });
      break;
    default:
      break;
    }
  }

  render() {
    const { email, password, emailValido, passwordValida } = this.state;
    return (
      <div>
        <h1>TRYBE WALLET</h1>
        <form onSubmit={ this.SubmitLogin }>
          <label htmlFor="email">
            <input
              id="email"
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            <input
              id="password"
              type="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
              data-testid="password-input"
            />
          </label>
          <button
            type="submit"
            disabled={ !(emailValido && passwordValida) }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getEmail: (payload) => dispatch(getValidEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.objectOf(String),
  getEmail: PropTypes.func.isRequired,
};

Login.defaultProps = {
  history: undefined,
};
