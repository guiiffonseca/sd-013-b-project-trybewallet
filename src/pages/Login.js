import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusButton: true,
      email: '',
      senha: '',
    };
  }

  verifyEmail = (email) => {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    return emailRegex.test(email);
  };
  
  handleEmailChange = ({ target }) => {
    const { value } = target;
    this.setState({
      email: value,
    });
    this.checkStatus();
  };
  
  handlePassChange = ({ target }) => {
    const { value } = target;
    this.setState({
      senha: value,
    });
    this.checkStatus();
  };
  
  checkStatus = () => {
    const { email, senha } = this.state;
    const status = this.verifyEmail(email);
    const size = 5;
    if (status === true && senha.length === size) {
      this.setState({ statusButton: false });
    } else {
      this.setState({ statusButton: true });
    }
  };
  

  render() {
    const { statusButton, email, senha } = this.state;
    return (
      <div>
        <input
          type="email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleEmailChange }
        />
        <input
          type="text"
          data-testid="password-input"
          value={ senha }
          onChange={ this.handlePassChange }
        />
        <button type="button" disabled={ statusButton }>Entrar</button>
      </div>
    );
  }
}

export default Login;
