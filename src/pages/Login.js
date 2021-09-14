import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { saveUserInfo } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.submit = this.submit.bind(this);
    this.saveUserInfo = this.saveUserInfo.bind(this);
  }

  saveUserInfo() {
    const { switchEmail } = this.props;
    const { email } = this.state;
    switchEmail(email);
  }

  validateEmail({ target: { value } }) {
    const validEmail = /\S+@\S+\.\S+/;
    if (validEmail.test(value) === true) {
      this.setState({
        email: value,
      });
    }
  }

  validatePassword({ target: { value } }) {
    const minLength = 6;
    if (value.length >= minLength) {
      this.setState({
        password: value,
      });
    }
  }

  submit() {
    const { email, password } = this.state;
    if (email && password) return false;

    return true;
  }

  render() {
    return (
      <section className="login">
        <input
          type="text"
          placeholder="Email"
          data-testid="email-input"
          onChange={ (email) => this.validateEmail(email) }
        />
        <input
          type="password"
          placeholder="Password"
          data-testid="password-input"
          onChange={ (pass) => this.validatePassword(pass) }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ this.submit() }
            onClick={ () => this.saveUserInfo() }
          >
            ENTRAR
          </button>
        </Link>
      </section>
    );
  }
}

Login.propTypes = {
  switchEmail: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  switchEmail: (payload) => dispatch(saveUserInfo(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
