import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { getEmail } from '../actions';
// import { savePlayer } from '../services/saveToLocal';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      // password: '',
      isEmailValid: false,
      isPassValid: false,
    };

    this.verifyPassword = this.verifyPassword.bind(this);
    this.verifyEmail = this.verifyEmail.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }
  /*
  async onClick() {
    const { tokenData, history, addNameAndEmail, addImage } = this.props;
    const { name, email } = this.state;

    const response = await fetchToken();
    tokenData(response);

    const responseImage = await fetchImage(email);
    addImage(responseImage);

    addNameAndEmail(name, email);
    savePlayer(name, email);
    history.push('/game');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(() => ({ [name]: value }), this.infoCheck);
  }

  infoCheck() {
    const { name, email } = this.state;
    const isDisable = !(name.length > 0 && email.length > 0);
    this.setState({ isDisable });
  } */

  submitLogin(e) {
    e.preventDefault();
    const { addEmail, history } = this.props;
    const { email } = this.state;
    addEmail(email);
    history.push('/carteira');
  }

  verifyEmail({ target }) {
    // const { email, isEmailValid } = this.state;
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(target.value)) {
      this.setState({ email: target.value, isEmailValid: true });
    } else {
      this.setState({ isEmailValid: false });
    }
  }

  verifyPassword({ target }) {
    const MIN_CHAR = 6;
    if (target.value.length >= MIN_CHAR) {
      this.setState({ isPassValid: true });
    } else {
      this.setState({ isPassValid: false });
    }
  }

  render() {
    const { isEmailValid, isPassValid } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <label htmlFor="login">
          Email:
          <input
            type="email"
            data-testid="email-input"
            id="login"
            onChange={ this.verifyEmail }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            data-testid="password-input"
            id="password"
            onChange={ this.verifyPassword }
          />
        </label>
        <button
          type="button"
          data-testid="login-submit-btn"
          onClick={ (e) => this.submitLogin(e) }
          disabled={ !(isEmailValid && isPassValid) }
        >
          Entrar
        </button>
      </div>
    );
  }
}

/*  <Link to="/settings">
    <button type="button" data-testid="btn-settings">
      Configurações
    </button>
  </Link> */

Login.propTypes = {
  addEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addEmail: (email) => dispatch(getEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
