import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setLoginValue } from '../actions';
// import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { history, dispatchSetValue } = this.props;
    dispatchSetValue(this.state);
    history.push('/carteira');
  }

  validateLogin() {
    const { email, password } = this.state;
    const minSize = 6;
    if (email.includes('@')
    && email.includes('.com')
    && password.length >= minSize) return true;
    return false;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div id="container-login">
        <form>
          <label htmlFor="email-input">
            Email:
            <input
              id="email-input"
              name="email"
              data-testid="email-input"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            Senha:
            <input
              id="password-input"
              name="password"
              value={ password }
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
          <button
            onClick={ this.handleClick }
            id="btn-login"
            type="button"
            disabled={ !this.validateLogin() }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

// Códigos abaixo foram retirados do repositorio
// live lecture referente ao dia 16.3

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({ user: state.email });

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (loginValue) => dispatch(
    setLoginValue(loginValue),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
