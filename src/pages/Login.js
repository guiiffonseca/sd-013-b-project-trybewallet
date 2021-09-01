import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveLoginName } from '../actions'; // importando da action

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      activateLogin: true,
    };
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.letsStart = this.initStart.bind(this);
  }

  handleChangeLogin({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.activateBtnLogin();
  }

  initStart() {
    const { importLogin } = this.props;
    const { email } = this.state;
    importLogin(email);
    this.setState({
      shouldRedirectToCarteira: true,
    });
  }

  activateBtnLogin() {
    const { email, password } = this.state;
    const minimumPw = 5;
    const checkEmail = /.+@.+\.[A-Za-z]+$/;
    if (password.length >= minimumPw && checkEmail.test(email)) {
      this.setState({
        activateLogin: false,
      });
    } else {
      this.setState({
        activateLogin: true,
      });
    }
  }

  render() {
    const { email, password, activateLogin, shouldRedirectToCarteira } = this.state;
    if (shouldRedirectToCarteira) {
      return <Redirect to="/carteira" />;
    }
    return (
      <div>
        <label className="label-login" htmlFor="email">
          <input
            id="email"
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChangeLogin }
            data-testid="email-input"
          />
          Senha
          <input
            id="password"
            name="password"
            value={ password }
            onChange={ this.handleChangeLogin }
            data-testid="password-input"
          />
          Email
          <button
            type="button"
            disabled={ activateLogin }
            onClick={ this.initStart }
          >
            Entrar
          </button>
        </label>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  importLogin: (state) => dispatch(saveLoginName(state)),
});

Login.propTypes = {
  importLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
