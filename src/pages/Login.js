import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.validation = this.validation.bind(this);
  }

  validation() { // regex from stackoverflow
    const { email, password } = this.state;
    const mailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    const validMail = mailCheck.test(email); // true or false
    const passMinDig = 6;
    const passCheck = password.length >= passMinDig; // true or false
    if (validMail && passCheck) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  render() {
    const { disabled } = this.state;
    return (
      <form>
        <input
          id="email"
          name="email"
          type="email"
          data-testid="email-input"
        />
        <input
          type="password"
          data-testid="password-input"
        />
        <button
          type="button"
          disabled={ disabled }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
