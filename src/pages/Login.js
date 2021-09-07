import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      emailValid: false,
      passwordValid: false,
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleEmail({ target }) {
    const { value } = target;
    const emailREGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    const emailValidation = emailREGEX.test(value);
    this.setState({
      email: value,
      emailValid: emailValidation,
    });
  }

  handlePassword({ target }) {
    const { value } = target;
    const passwordLength = 6;
    const passwordValidation = value.length >= passwordLength;
    this.setState({
      password: value,
      passwordValid: passwordValidation,
    });
  }

  handleClick() {
    const { sendUser, history, state } = this.props;
    const { email } = this.state;
    sendUser(email);
    history.push('/carteira');
    console.log(state);
  }

  render() {
    const { passwordValid, emailValid, password } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              placeholder="usuario@exemplo.com"
              name="email"
              data-testid="email-input"
              onChange={ this.handleEmail }
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="text"
              placeholder="*******************"
              name="password"
              data-testid="password-input"
              onChange={ this.handlePassword }
              value={ password }
            />
          </label>
          <button
            disabled={ !passwordValid || !emailValid }
            type="submit"
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendUser: (value) => dispatch(updateUser(value)),
});

const mapStateToProps = (state) => ({
  state,
});

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  sendUser: PropTypes.func.isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
