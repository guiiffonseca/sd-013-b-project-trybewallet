import React from 'react';
import './Login.css';
import walletimg from '../images/wallet.png';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm() {
    console.log('clique no botão');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="login-body">
        <div className="login-main">
          <img className="login-icon" src={ walletimg } alt="Wallet icon" />
          <h1>Trybe Wallet</h1>
          <div className="login-input">
            <input
              type="text"
              value={ email }
              name="email"
              data-testid="email-input"
              onChange={ this.handleChange }
              placeholder="email"
            />
          </div>
          <div className="login-input">
            <input
              type="password"
              value={ password }
              name="password"
              data-testid="password-input"
              onChange={ this.handleChange }
              placeholder="password"
            />
          </div>
          <div className="login-input">
            <button
              type="button"
              onClick={ this.onSubmitForm }
              disabled
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
