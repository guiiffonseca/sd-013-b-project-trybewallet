import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      isEmailValid: false,
      isPasswordValid: false,
      password: '',
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(event){
    event.persist();
    const { target: { value } } = event;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    const isEmailValid = regexEmail.test(value);
    this.setState({ email: value, isEmailValid });
  }

  handlePassword(event) {
    event.persist();
    const { target: { value } } = event;
    const passwordLegth = 6;
    const isPasswordValid = value.length >= passwordLegth;
    this.setState({ password: value, isPasswordValid });
  }

  handleSubmit() {
    const { login, history } = this.props;
    const { email, isEmailValid, isPasswordValid } = this.state;

    if (isEmailValid && isPasswordValid) {
      login(email);
      history.push('/carteira')
    }
  }

  render() {
    const { email, password, isEmailValid, isPasswordValid } = this.state;
    return (
      <form>
        <fieldset>
          <input
            data-testid="email-input"
            type="text"
            onChange={ this.handleEmail }
            value={ email }
            name="email"
            placeholder="alguem@alguem.com'"
            required
          />
          <input
            data-testid="password-input"
            type="password"
            onChange={ this.handlePassword }
            value={ password }
            name="password"
            placeholder="Digite sua senha"
            minLength="6"
            required
          />
          <button
            type="button"
            onClick={ this.handleSubmit }
            disabled={ !isEmailValid || !isPasswordValid }
          > Entrar 
          </button>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(actionLogin(email)),
});

Login.propTypes={
  login: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
