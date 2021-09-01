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
    };

    this.handleInputs = this.handleInputs.bind(this);
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
      [emailValid]: email.includes('@') && email.includes('.com'),
      [passwordValid]: password.length >= numberSix,
    });
  }

  render() {
    const { email, password } = this.state;
    const { login } = this.props;

    const numberSix = 6;
    const emailValid = email.includes('@') && email.includes('.com');
    const passwordValid = password.length >= numberSix;
    const isTwoValid = emailValid && passwordValid;
    // console.log(`se os dois deu true: ${isTwoValid} `);

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
              disabled={ !isTwoValid }
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
