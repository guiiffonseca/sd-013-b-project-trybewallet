import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fazerLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isButtonEnabled: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateButton = this.validateButton.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  validateButton() {
    const passwordLength = 5;
    const { email, password } = this.state;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if (regex.test(email) && password.length >= passwordLength) {
      this.setState({ isButtonEnabled: true });
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
    this.validateButton();
  }

  submitLogin() {
    const { history, dispatchFazerLogin } = this.props;
    const { email } = this.state;
    dispatchFazerLogin(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, isButtonEnabled } = this.state;
    return (
      <div>
        <label htmlFor="email-input">
          <input
            type="email"
            data-testid="email-input"
            name="email"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>
        <label htmlFor="password-input">
          <input
            type="password"
            data-testid="password-input"
            name="password"
            onChange={ this.handleChange }
            value={ password }
          />
        </label>
        <button
          onClick={ this.submitLogin }
          type="submit"
          data-testid="login-button"
          id="button"
          disabled={ !isButtonEnabled }
        >
          Entrar
        </button>

      </div>
    );
  }
}

Login.propTypes = {
  // email: PropTypes.string.isRequired,
  dispatchFazerLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFazerLogin: (userEmail) => dispatch(fazerLogin(userEmail)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
