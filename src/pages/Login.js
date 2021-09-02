import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { setEmail as setEmailAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.canBeSubmitted = this.canBeSubmitted.bind(this);
    this.setExpensesThunk = this.setExpensesThunk.bind(this);
  }

  canBeSubmitted() {
    // Referência: https://www.w3resource.com/javascript/form/email-validation.php
    const PASSWORD_MINIMUM_LENGTH = 6;
    const { email, password } = this.state;
    const emailValidInput = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(emailValidInput) && password.length >= PASSWORD_MINIMUM_LENGTH) {
      return true;
    }
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });

    this.canBeSubmitted();
    this.setExpensesThunk();
  }

  render() {
    const { email } = this.state;
    const { setEmail } = this.props;

    return (
      <div>
        <form onSubmit={ (event) => event.preventDefault() }>
          <label htmlFor="email-input">
            <input
              type="email"
              name="email"
              onChange={ this.handleChange }
              placeholder="Insira seu e-mail"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password-input">
            <input
              type="password"
              name="password"
              onChange={ this.handleChange }
              placeholder="Insira sua senha"
              data-testid="password-input"
            />
          </label>
          <Link to="/carteira">
            <button
              type="submit"
              onClick={ () => setEmail(email) }
              disabled={ !this.canBeSubmitted() }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(setEmailAction(email)),
});

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
