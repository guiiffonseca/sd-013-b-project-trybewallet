import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Styling:
import './Login.css';
import wallet from '../wallet.svg';
import loginAction from '../actions';

// import Input from '../components/Input'; Não passa no teste :(
// import Button from '../components/Button'; Não funciona com o disabled

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      buttonOff: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.handleButton();
  }

  handleClick() {
    const { email, login } = this.state;
    const { history, currentEmail } = this.props;
    currentEmail(email, login);
    history.push('/carteira');
  }

  handleButton() {
    const { email, password } = this.state;
    const regex = /\S+@\S+\.\S+/; // Font: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const testEmail = regex.test(email);
    const minLength = 5;
    const testPassword = (password.length >= minLength);
    if (testEmail && testPassword) {
      this.setState({
        buttonOff: false,
      });
    } else {
      this.setState({
        buttonOff: true,
      });
    }
  }

  render() {
    const { email, password, buttonOff } = this.state;
    return (
      <div>
        <form className="login-card">
          <img
            src={ wallet }
            alt="wallet icon"
          />
          <input
            data-testid="email-input"
            type="email"
            name="email"
            value={ email }
            placeholder="Login"
            onChange={ this.handleChange }
          />

          <input
            data-testid="password-input"
            type="password"
            name="password"
            value={ password }
            placeholder="password"
            onChange={ this.handleChange }
          />

          <button
            onClick={ this.handleClick }
            type="button"
            disabled={ buttonOff }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  currentEmail: (email, login) => dispatch(loginAction(email, login)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.string.isRequired,
  currentEmail: PropTypes.string.isRequired,
};
