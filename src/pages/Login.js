import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { saveEmailAction } from '../actions';
import '../App.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pwdIsBad: true,
      emailIsBad: true,
      email: '',
    };
    this.verifyEmail = this.verifyEmail.bind(this);
    this.verifyPwd = this.verifyPwd.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  verifyEmail({ target: { value } }) {
    const emailRegex = /^(\S+)@((?:(?:(?!-)[a-z0-9-]{1,62}[a-z0-9])\.)+[a-z0-9]{2,12})$/;
    if (emailRegex.test(value)) {
      this.setState({
        emailIsBad: false,
        email: value,
      });
    } else this.setState({ emailIsBad: true });
  }

  verifyPwd({ target: { value } }) {
    const minimumPwdLength = 6;

    if (value.length >= minimumPwdLength) this.setState({ pwdIsBad: false });
    else this.setState({ pwdIsBad: true });
  }

  handleClick() {
    const { email } = this.state;
    const { saveEmail } = this.props;

    saveEmail(email);
  }

  render() {
    const { pwdIsBad, emailIsBad } = this.state;

    return (
      <form
        className="login"
      >
        <label
          htmlFor="email"
        >
          Email:
          <input
            type="email"
            data-testid="email-input"
            name="email"
            onChange={ this.verifyEmail }
          />
        </label>
        <label
          htmlFor="password"
        >
          Password:
          <input
            type="password"
            data-testid="password-input"
            name="password"
            onChange={ this.verifyPwd }
          />
        </label>
        <Link
          to="/carteira"
        >
          <button
            type="button"
            disabled={ pwdIsBad || emailIsBad }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(saveEmailAction(email)),
});

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
