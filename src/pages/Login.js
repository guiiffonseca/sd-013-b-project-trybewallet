import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setEmailAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { email } = this.state;
    const { setEmail } = this.props;
    setEmail(email);
  }

  render() {
    const { email, password } = this.state;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;
    const testEmail = emailRegex.test(email);
    const number = 6;
    let enableButton = true;
    if (password.length >= number && testEmail) {
      enableButton = false;
    }
    return (
      <div>
        <form>
          <label htmlFor="email">
            email
            <input
              data-testid="email-input"
              type="text"
              name="email"
              value={ email }
              id="email"
              placeholder="email"
              maxLength="30"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            password
            <input
              data-testid="password-input"
              type="text"
              name="password"
              value={ password }
              id="password"
              placeholder="password"
              maxLength="6"
              onChange={ this.handleChange }
            />
          </label>
          <Link
            to="/carteira"
          >
            <button type="button" disabled={ enableButton } onClick={ this.handleClick }>
              Entrar
            </button>
          </Link>
        </form>
      </div>);
  }
}
const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(setEmailAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
};
