import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import loginSubmit from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateLogin = this.validateLogin.bind(this);

    this.state = {
      email: '',
      password: '',
      enabled: false,
      redirect: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;

    this.setState({
      [name]: target.value,
    }, () => this.validateLogin());
  }

  handleSubmit() {
    const { email } = this.state;
    const { loginAction } = this.props;

    loginAction(email);

    this.setState({ redirect: true });
  }

  validateLogin() {
    const { email, password } = this.state;
    const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validPasswordRegex = /^[a-zA-Z0-9]{6,}$/;

    const validEmail = validEmailRegex.test(email);
    const validPassword = validPasswordRegex.test(password);

    if (validEmail && validPassword) this.setState({ enabled: true });
    else this.setState({ enabled: false });
  }

  render() {
    const { enabled, redirect } = this.state;

    if (redirect === true) { return <Redirect to="/carteira" />; }

    return (
      <div>
        <form>
          <input
            type="email"
            required
            name="email"
            data-testid="email-input"
            placeholder="Email"
            onChange={ this.handleChange }
          />
          <input
            type="password"
            required
            name="password"
            minLength="6"
            data-testid="password-input"
            placeholder="Password"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            disabled={ !enabled }
            onClick={ this.handleSubmit }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginAction: (payload) => dispatch(loginSubmit(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
