import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      isValidEmail: false,
      isValidPass: false,
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleEmail({ target }) {
    const email = target.value;
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    const isValidEmail = emailTest.test(email);

    this.setState({
      email,
      isValidEmail,
    });
  }

  handlePassword({ target }) {
    const MIN_PASS_CHAR = 5;
    let isValidPass = false;

    if (target.value.length > MIN_PASS_CHAR) {
      isValidPass = true;
    }

    this.setState({
      isValidPass,
    });
  }

  handleClick() {
    const { email: emailS } = this.state;
    const { sendEmail } = this.props;

    sendEmail(emailS);
  }

  render() {
    const { isValidEmail, isValidPass } = this.state;

    return (
      <form>
        <label htmlFor="user_email">
          Email:
          <input
            type="email"
            data-testid="email-input"
            id="user_email"
            onChange={ this.handleEmail }
          />
        </label>
        <label htmlFor="user_password">
          Senha:
          <input
            data-testid="password-input"
            id="user_password"
            type="password"
            onChange={ this.handlePassword }
          />
        </label>
        <Link to="/carteira">
          <button
            type="submit"
            disabled={ !(isValidEmail && isValidPass) }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

Login.propTypes = {
  sendEmail: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (email) => dispatch(setEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
