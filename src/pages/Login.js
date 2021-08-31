import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // handleEmailChange({ target }) {
  //   const { userName } = this.state;
  //   if (userName === /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i) {
  //     this.setState({
  //       disabled: false,
  //     });
  //   }
  //   this.setState({
  //     userName: target.value,
  //   });
  // }

  // Expressão do Regex pesquisei no stackoverflow e testei no RegEx Testing
  handleInputChange({ target }) {
    const minCaracteres = 5;
    const { name, value } = target;
    const { email, password } = this.state;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    this.setState({
      [name]: value,
    });
    if (password.length >= minCaracteres && emailRegex.test(email)) {
      console.log('deu certo');
      this.setState({
        disabled: false,
      });
    }
  }

  handleSubmit() {
    const { history } = this.props;
    history.push('/wallet');
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <form>
        <label htmlFor="email">
          Email
          <input
            data-testid="email-input"
            type="text"
            name="email"
            value={ email }
            id="email"
            placeholder="exemplo@email.com"
            onChange={ this.handleInputChange }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            data-testid="password-input"
            type="password"
            name="password"
            value={ password }
            id="password"
            placeholder="Digite sua senha"
            onChange={ this.handleInputChange }
          />
        </label>

        <button
          type="button"
          disabled={ disabled }
          onClick={ this.handleSubmit }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
