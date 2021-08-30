import React from 'react';
import PropTypes from 'prop-types';

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
    const { history } = this.props;
    history.push('/carteira');
  }

  handleButton() {
    const { email, password, buttonOff } = this.state;
    const regex = /\S+@\S+\.\S+/; // Font: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const testEmail = regex.test(email);
    const minLength = 5;
    const testPassword = (password.length >= minLength);
    if (testEmail && testPassword && buttonOff) {
      this.setState({
        buttonOff: false,
      });
    }
  }

  render() {
    const { email, password, buttonOff } = this.state;
    return (
      <div>
        <form>
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

export default Login;

Login.propTypes = {
  history: PropTypes.string.isRequired,
};
