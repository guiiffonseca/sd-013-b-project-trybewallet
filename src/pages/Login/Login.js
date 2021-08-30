import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setEmail, setPassword } from '../../actions/index';

import './Login.css';

const countLetter = (str, letter) => (
  str
    .split('')
    .reduce((acc, cur) => {
      if (cur === letter) return acc + 1;
      return acc;
    }, 0)
);

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.btnRef = React.createRef();

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    this.btnRef.current.disabled = true;
  }

  componentDidUpdate() {
    const { email, password } = this.state;

    const atCount = countLetter(email, '@');
    const dotCount = countLetter(email, '.');
    const minLength = 6;

    if (
      atCount === 1
      && dotCount === 1
      && email[email.length - 1] !== '.'
      && password.length >= minLength
    ) {
      this.btnRef.current.disabled = false;
    } else {
      this.btnRef.current.disabled = true;
    }
  }

  changeHandler(e) {
    this.setState({
      [e.target.type]: e.target.value,
    });
  }

  submitHandler(e) {
    e.preventDefault();

    const { changeEmail, changePassword } = this.props;
    const { email, password } = this.state;
    const { history } = this.props;

    if (this.btnRef.current.disabled) return;

    changeEmail(email);
    changePassword(password);

    history.push('/carteira');
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-container">
          <form>
            <h1>
              <span>TRYBE</span>
              WALLET
            </h1>
            <input
              onChange={ this.changeHandler }
              type="email"
              data-testid="email-input"
              placeholder="Email"
              required
            />
            <input
              onChange={ this.changeHandler }
              type="password"
              data-testid="password-input"
              placeholder="Password"
              required
            />
            <button
              type="submit"
              onClick={ this.submitHandler }
              ref={ this.btnRef }
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeEmail: (value) => dispatch(setEmail(value)),
  changePassword: (value) => dispatch(setPassword(value)),
});

Login.propTypes = {
  changeEmail: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  history: {
    push: PropTypes.func.isRequired,
  }.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
