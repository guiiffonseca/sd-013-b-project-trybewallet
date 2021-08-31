import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      btnDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value },
      this.emailAndPasswordValidation);
  }

  handleClick() {
    const { email } = this.state;
    const { dispatchLogin, history } = this.props;
    dispatchLogin(email);
    history.push('/carteira');
  }

  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  emailAndPasswordValidation() {
    const re = /.+@.+\.[A-Za-z]+$/;
    const minLength = 5;
    const { email, password } = this.state;
    if (password.length > minLength && re.test(email)) {
      this.setState({
        btnDisabled: false,
      });
    } else {
      this.setState({
        btnDisabled: true,
      });
    }
  }

  render() {
    const { email, password, btnDisabled } = this.state;
    return (

      <form className="login-form">
        <input
          placeholder="Email"
          type="email"
          data-testid="email-input"
          onChange={ this.handleChange }
          name="email"
          value={ email }
        />
        <input
          placeholder="Password"
          type="password"
          data-testid="password-input"
          onChange={ this.handleChange }
          name="password"
          value={ password }
        />
        <button
          type="submit"
          onClick={ this.handleClick }
          disabled={ btnDisabled }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (state) => dispatch(login(state)),
});

export default connect(null, mapDispatchToProps)(Login);
