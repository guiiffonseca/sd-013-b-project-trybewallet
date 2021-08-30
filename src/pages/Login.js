import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getUserEmail } from '../actions';
import Input from '../components/Input';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      logged: false,
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { email } = this.state;
    const { userEmail } = this.props;
    userEmail(email);
    this.setState({
      logged: true,
    });
  }

  render() {
    const { email, password, logged } = this.state;
    const PASSWORD_MINIMUM_CHAR = 6;
    // regex: https://www.w3resource.com/javascript/form/email-validation.php
    const EMAIL_VALIDATION = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (logged) return <Redirect to="/carteira" />;

    return (
      <fieldset>
        <form>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Digite seu email"
            test="email-input"
            onChange={ this.handleInput }
          />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Digite sua senha"
            test="password-input"
            onChange={ this.handleInput }
          />
          <button
            type="button"
            disabled={ password.length < PASSWORD_MINIMUM_CHAR
            || !EMAIL_VALIDATION.test(email) }
            onClick={ this.handleSubmit }
          >
            Entrar
          </button>
        </form>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userEmail: (email) => dispatch(getUserEmail(email)),
});

Login.propTypes = {
  userEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
