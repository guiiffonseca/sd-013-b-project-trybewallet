import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isDisabled: false,
    };

    this.handleInputs = this.handleInputs.bind(this);
    this.handleEnabled = this.handleEnabled.bind(this);
  }

  handleInputs(event) {
    const { target } = event;

    const emailValid = 'emailValid';
    const passwordValid = 'passwordValid';

    this.setState({
      [target.name]: target.value,
    });

    const { email, password } = this.state;
    const numberSix = 6;

    this.setState({
      [emailValid]: email.includes('@' && '.'),
      [passwordValid]: password.length >= numberSix,
    });
  }

  handleEnabled() {
    const { email, password } = this.state;
    const isDisabled = 'isDisabled';

    const validEmail = email.includes('@') && email.includes('.com');
    const numberSix = 6;
    const validPassword = password.length >= numberSix;

    this.setState({ [isDisabled]: validEmail && validPassword });
  }

  render() {
    const { email, password, isDisabled } = this.state;
    const { login } = this.props;

    return (
      <div>
        <h2>Login</h2>
        <fieldset>
          <label htmlFor="email">
            Email:
            <input
              data-testid="email-input"
              name="email"
              type="email"
              value={ email }
              onChange={ this.handleInputs }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              data-testid="password-input"
              name="password"
              type="password"
              value={ password }
              onChange={ this.handleInputs }
            />
          </label>

          <Link to="/carteira">
            <button
              type="button"
              disabled={ isDisabled }
              onClick={ () => login(email) }
            >
              Entrar
            </button>
          </Link>

        </fieldset>
      </div>

    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (value) => dispatch(loginAction(value)),
});

export default connect(null, mapDispatchToProps)(Login);
