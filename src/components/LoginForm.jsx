import React from 'react';

import '../styles/home.css';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // inputEmail: '',
      // inputLogin: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log('montou');
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  render() {
    return (
      <div className="box-content">
        <div className="login-icon">
          <h3>
            ICONE
          </h3>
        </div>
        <form className="main-form">
          <div className="input-email-box">
            <label htmlFor="inputEmail" className="input-text">
              <input
                type="text"
                id="inputEmail"
                data-testid="email-input"
                placeholder="E-mail"
                className="pr-color input-form-base input-email"
                onChange={ this.handleChange }
                autoComplete="off"
              />
            </label>
          </div>
          <div className="input-login-box">
            <label htmlFor="inputLogin" className="input-password">
              <input
                type="password"
                maxLength="6"
                id="inputLogin"
                data-testid="password-input"
                className=" pr-color input-form-base input-password"
                onChange={ this.handleChange }
                placeholder="Senha"
                autoComplete="off"
              />
            </label>
          </div>
          <div className="login-button-area">
            <button
              type="button"
              className="login-button"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
