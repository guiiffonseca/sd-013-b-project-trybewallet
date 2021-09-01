import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login as getLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      stopButton: true,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validatedButton = this.validatedButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //  handleChange joga valores inputados no state local, depois chama validador do botao

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.validatedButton();
  }

  //  Busquei como validar email em javascript neste artigo do stackoverflow
  //  https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

  validatedButton() {
    const { email, password } = this.state;
    const MINIMAL_LENGTH = 5;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if (emailRegex.test(email) && password.length >= MINIMAL_LENGTH) {
      this.setState({ stopButton: false });
    }
  }

  handleClick() {
    const { history, login } = this.props;
    const { email } = this.state;
    login(email);
    history.push('/carteira');
  }

  render() {
    const { stopButton, email, password } = this.state;
    return (
      <div className="login">
        <section className="emailInput">
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            placeholder="email"
            data-testid="email-input"
          />
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            placeholder="password"
            data-testid="password-input"
          />
        </section>
        <button
          type="button"
          disabled={ stopButton }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(getLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
