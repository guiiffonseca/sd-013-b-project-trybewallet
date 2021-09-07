import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      button: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    // const button = target.parentNode.lastChild;
    // const { email, password } = this.state;
    this.setState({
      [name]: value,
    });
  }
  
  enableButton() {
    const { email, password } = this.state;
    if (!(/\S+@\S+\.\S+/.test(email) && password.length >= 6)) {
      this.setState({ button: true });
    } else {
      this.setState({ button: false });
    }
  }

  render() {
    const { email, password, button } = this.state;
    return (
      <div>
        <form>
          <input
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ this.handleChange }
            value={ email }
          />
          <br />
          <input
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ this.handleChange }
            value={ password }  
          />
          <br />
          <button
            type="button"
            id="input-button"
            disabled={ !button }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
