import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.checkUserAndPassword = this.checkUserAndPassword.bind(this);
    this.buttonClick = this.buttonClick.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  onInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  checkUserAndPassword() {
    const minusOne = -1;
    const six = 6;
    const { email, password } = this.state;
    const checkUser = email.indexOf('@') > 0
    && email.indexOf('.com') > email.indexOf('@') + 1
    && email.indexOf(' ') === minusOne;
    const checkPassword = password.length >= six;
    return checkUser && checkPassword;
  }

  buttonClick() {
    const { history } = this.props;
    history.push('/carteira');
  }

  render() {
    this.checkUserAndPassword();
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <input
            type="email"
            data-testid="email-input"
            name="email"
            onChange={ this.onInputChange }
            value={ email }
          />
          <input
            type="password"
            data-testid="password-input"
            name="password"
            onChange={ this.onInputChange }
            value={ password }
          />
          <button
            type="button"
            disabled={ !this.checkUserAndPassword() }
            onClick={ this.buttonClick }
          >
            Entrar

          </button>
        </form>
      </div>);
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Login;
