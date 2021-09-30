import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { inputEmail as actionUserEmail } from '../actions/index';
import '../style/loginStylesheet.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validEmail: false,
      validPassword: false,
      validForm: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value }, () => {
      this.fieldValidation(target.name, target.value);
    });
  }

  fieldValidation(fieldName, value) {
    const passLenght = 6;
    let { validEmail, validPassword } = this.state;

    switch (fieldName) {
    case 'email':
      validEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      break;
    case 'password':
      validPassword = value.length >= passLenght;
      break;
    default:
      break;
    }
    this.setState(
      {
        validEmail,
        validPassword,
      },
      this.formValidation,
    );
  }

  formValidation() {
    const { validEmail, validPassword } = this.state;
    this.setState({ validForm: validEmail && validPassword });
  }

  handleBtnClick(e) {
    e.preventDefault();
    const { history, inputEmail } = this.props;
    const { email } = this.state;
    inputEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, validForm } = this.state;

    return (
      <div className="login">
        <form>
          <label htmlFor="emailInput">
            Email:
            <input
              type="email"
              data-testid="email-input"
              name="email"
              id="emailInput"
              onChange={ this.handleChange }
              value={ email }
            />
          </label>
          <label htmlFor="passwordInput">
            Password:
            <input
              type="password"
              data-testid="password-input"
              name="password"
              id="passwordInput"
              onChange={ this.handleChange }
              value={ password }
            />
          </label>
          <button
            type="submit"
            disabled={ !validForm }
            onClick={ this.handleBtnClick }>
            Entrar
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  inputEmail: (email) => dispatch(actionUserEmail(email)),
});

Login.propTypes = {
  inputEmail: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
