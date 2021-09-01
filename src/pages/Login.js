import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setEmail as setEmailAction, setLoged as setLogedAction} from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.handleButtonLock = this.handleButtonLock.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const button = document.getElementById('loginButton');
    button.disabled = true;
    console.log(this.props);
  }

  handleClick() {
    const { setEmail, setLoged } = this.props;
    const emailInput = document.getElementById('emailInput').value;
    setEmail(emailInput);
    setLoged();
  }

  handleButtonLock() {
    const emailInput = document.getElementById('emailInput').value;
    const passwordInput = document.getElementById('passwordInput').value;
    const button = document.getElementById('loginButton');
    const NUMBER = 5;
    if (passwordInput.length > NUMBER && emailInput.length > NUMBER) {
      if (emailInput.includes('.com') && emailInput.indexOf('@') > 0) {
        button.disabled = false;
      }
    } else {
      button.disabled = true;
    }
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email
            <input
              onChange={ this.handleButtonLock }
              type="email"
              id="emailInput"
              name="email"
              data-testid="email-input"
              required
            />
          </label>
          <label htmlFor="senha">
            Senha
            <input
              onChange={ this.handleButtonLock }
              type="password"
              nama="senha"
              data-testid="password-input"
              minLength="6"
              id="passwordInput"
              required
            />
          </label>
          <button
            type="button"
            name="entrar"
            value="Entrar"
            id="loginButton"
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>);
  }
}
const mapDispatchToProps = (dispatch) => ({
  setEmail: (payload) => dispatch(setEmailAction(payload)),
  setLoged: () => dispatch(setEmailAction()),
});
export default connect(null, mapDispatchToProps)(Login);
