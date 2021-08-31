import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions';
import Input from '../Components/InputLogin';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlClick = this.handlClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handlClick() {
    const { email } = this.state;
    const { userEmail } = this.props;
    userEmail(email);
  }

  render() {
    const { email, password } = this.state;
    let validate = true;
    const passwordLenght = 6;
    const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const validateEmail = EMAIL_REGEX.test(email);
    if (validateEmail && password.length >= passwordLenght) {
      validate = false;
    }
    return (
      <form>
        <Input
          type="email"
          name="email"
          value={ email }
          label="Email:"
          onChange={ this.handleChange }
        />

        <Input
          type="password"
          name="password"
          value={ password }
          label="Senha:"
          onChange={ this.handleChange }
          minLength="6"
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ validate }
            onClick={ this.handlClick }
          >
            Entrar
          </button>
        </Link>
      </form>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userEmail: (email) => dispatch(login(email)),
});

Login.propTypes = {
  userEmail: PropTypes.func.isRequired,
};

/// ^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
// https://redux-form.com/7.3.0/examples/syncvalidation/
// https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail

export default connect(null, mapDispatchToProps)(Login);
