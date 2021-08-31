import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { setEmail as setEmailAction } from '../actions';

const VALID_EMAIL = 'alguem@email.com';
const VALID_PASSWORD = '123456';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      // https://stackoverflow.com/questions/50793148/how-to-redirect-to-a-new-page-from-a-function-in-react/56666169
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { type, value } = target;
    this.setState({ [type]: value });
  }

  handleClick() {
    const { state: { email }, props: { setEmail } } = this;
    setEmail(email);
    this.setState((state) => ({ ...state, redirect: true }));
  }

  render() {
    const { email, password, redirect } = this.state;
    return (
      <div>
        { redirect ? (<Redirect to="/carteira" />) : null }
        <form>
          <label htmlFor="email-input">
            Email
            <input
              type="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password-input">
            Senha
            <input
              type="password"
              value={ password }
              onChange={ this.handleChange }
              data-testid="password-input"
            />
          </label>
          <button
            type="button"
            onClick={ this.handleClick }
            disabled={ !(VALID_PASSWORD === password && VALID_EMAIL === email) }
          >
            Entrar
          </button>
        </form>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmail: (payload) => dispatch(setEmailAction(payload)),
});

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
