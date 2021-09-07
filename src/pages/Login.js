import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userEmail } from '../actions';
// import store from '../store';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.inputValidation = this.inputValidation.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  handleChangeEmail({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  inputValidation() {
    const { email, password } = this.state;
    const minNumberInput = 6;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;// expre regular para validação de e-mail do stackOverFlow https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    if (regex.test(email) && (password.length >= minNumberInput)) {
      return false;
    }

    return true;
  }

  render() {
    const { email, password } = this.state;
    const { stateEmail } = this.props;
    return (
      <form>
        <label htmlFor="email">
          Insira um e-mail
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={ email }
            onChange={ this.handleChangeEmail }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Digita sua senha
          <input
            type="password"
            data-testid="password-input"
            minLength="6"
            name="password"
            id="password"
            onChange={ this.handleChangeEmail }
            defaultValue={ password }
          />
        </label>
        <Link to="/carteira">
          <button
            // href="wallet.js"
            type="button"
            onClick={ () => stateEmail(email) }
            disabled={ this.inputValidation() }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToprops = (dispatch) => ({
  stateEmail: (payload) => dispatch(userEmail(payload)),
});

export default connect(null, mapDispatchToprops)(Login);

Login.propTypes = {
  stateEmail: PropTypes.func.isRequired,
};
