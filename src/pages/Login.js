import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveUser as saveUserAction } from '../actions';
import './Login.css';
import walletimg from '../images/wallet.png';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailValid: false,
      password: '',
      passwordValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.validateDomainEmail = this.validateDomainEmail.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.validateUserEmail = this.validateUserEmail.bind(this);
  }

  onSubmitForm() {
    const { saveUser } = this.props;
    const { email } = this.state;
    saveUser(email);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.validateInput(name, value);
  }

  validateUserEmail(user) {
    const NEGATIVE_ONE = -1;
    return (
      (user.length >= 1)
      && (user.search('@') === NEGATIVE_ONE)
      && (user.search(' ') === NEGATIVE_ONE)
    );
  }

  validateDomainEmail(domain) {
    const NEGATIVE_ONE = -1;
    const NUMBER_THREE = 3;
    return (
      (domain.length >= NUMBER_THREE)
      && (domain.search('@') === NEGATIVE_ONE)
      && (domain.search(' ') === NEGATIVE_ONE)
      && (domain.search('.') !== NEGATIVE_ONE)
      && (domain.indexOf('.') >= 1)
      && (domain.lastIndexOf('.') < domain.length - 1)
    );
  }

  // https://www.devmedia.com.br/validando-e-mail-em-inputs-html-com-javascript/26427
  validateInput(name, value) {
    const NUMBER_SIX = 6;
    if (name === 'email') {
      const user = value.substring(0, value.indexOf('@'));
      const domain = value.substring(value.indexOf('@') + 1, value.length);
      if (this.validateUserEmail(user) && this.validateDomainEmail(domain)) {
        this.setState({
          emailValid: true,
        });
      } else {
        this.setState({
          emailValid: false,
        });
      }
    } else if (name === 'password') {
      if (value.length >= NUMBER_SIX) {
        this.setState({
          passwordValid: true,
        });
      } else {
        this.setState({
          passwordValid: false,
        });
      }
    }
  }

  render() {
    const { email, emailValid, password, passwordValid } = this.state;
    return (
      <div className="login-body">
        <div className="login-main">
          <img className="login-icon" src={ walletimg } alt="Wallet icon" />
          <h1>Trybe Wallet</h1>
          <div className="login-input">
            <input
              type="text"
              value={ email }
              name="email"
              data-testid="email-input"
              onChange={ this.handleChange }
              onBlur={ this.validateInput }
              placeholder="email"
            />
          </div>
          <div className="login-input">
            <input
              type="password"
              value={ password }
              name="password"
              data-testid="password-input"
              onChange={ this.handleChange }
              placeholder="password"
            />
          </div>
          <div className="login-input">
            <button
              type="button"
              onClick={ this.onSubmitForm }
              disabled={ !emailValid || !passwordValid }
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveUser: (email) => dispatch(
    saveUserAction(email),
  ),
});

Login.propTypes = {
  saveUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
