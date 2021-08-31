import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validUser = this.validUser.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  validUser() {
    const { email, password } = this.state;
    const emailCheck = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;
    const CINCO = 5;
    if (emailCheck.test(email) && password.length > CINCO) {
      return true;
    }
    return false;
  }

  submitLogin() {
    const { validEmail } = this.props;
    const { email } = this.state;
    validEmail(email);
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            disabled={ !this.validUser() }
            type="button"
            onClick={ this.submitLogin() }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => (
  { validEmail: (email) => dispatch(userEmail(email)) }
);

Login.propTypes = ({
  validEmail: PropTypes.func.isRequired,
});

export default connect(null, mapDispatchToProps)(Login);
