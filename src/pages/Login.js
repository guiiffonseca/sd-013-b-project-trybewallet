import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.redirectLogin = this.redirectLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.enableButton();
  }

  enableButton() {
    const { email, password } = this.state;
    const MIN_PASSWORD = 5;
    // regex encontado aqui https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    // explicação do regex https://tinyurl.com/yzrop8m6
    const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if (REGEX_EMAIL.test(email) && password.length >= MIN_PASSWORD) {
      this.setState({ enable: false });
    }
  }

  redirectLogin() {
    const { email } = this.state;
    const { history, login } = this.props;

    login(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, enable } = this.state;
    return (
      <div>
        <input
          name="email"
          type="email"
          data-testid="email-input"
          value={ email }
          placeholder="exemple@email.com"
          onChange={ this.handleChange }
        />
        <input
          name="password"
          type="password"
          data-testid="password-input"
          value={ password }
          placeholder="Type your password here"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ enable }
          onClick={ this.redirectLogin }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  login: propTypes.func.isRequired,
  history: propTypes.objectOf(propTypes.any).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(userLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
