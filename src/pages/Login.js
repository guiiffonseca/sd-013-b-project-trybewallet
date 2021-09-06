import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { saveEmailAction } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.buttonDisabled = this.buttonDisabled.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { email } = this.state;
    const { history, dispatchEmail } = this.props;
    dispatchEmail(email);
    history.push('/carteira');
  }

  // referência para a regex utilizada: https://medium.com/@zackcreach/shred-the-gnar-how-to-write-decode-regex-for-email-validation-9a970fa91641
  buttonDisabled() {
    const { email, password } = this.state;
    const securityLength = 6;
    // Verifico de o email segue o padrao e se o tamanho da senha é maior ou igual a 6
    // Ser for verdadeiro eu removo o disabled do button
    return !(
      /(^\w.*@\w+\.\w)/.test(email) && password.length >= securityLength
    );
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <fieldset>
            <legend>Log in</legend>
            <input
              id="email"
              type="email"
              name="email"
              data-testid="email-input"
              placeholder="email"
              value={ email }
              onChange={ this.handleChange }
              required
            />
            <input
              id="password"
              type="password"
              name="password"
              data-testid="password-input"
              placeholder="password"
              value={ password }
              onChange={ this.handleChange }
              required
            />
            <button
              type="button"
              disabled={ this.buttonDisabled() }
              onClick={ this.handleSubmit }
            >
              Entrar
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (payload) => dispatch(saveEmailAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
