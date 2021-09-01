import React from 'react';
import PropTypes from 'prop-types';

// expressão regular retirada do site: https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
    this.redirect = this.redirect.bind(this);
    this.state = {
      email: '',
      password: '',
      incorrectInfo: true,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    }, () => this.validation());
  }

  validation() {
    const { email, password } = this.state;
    const regExp = /\S+@\S+\.\S+/;
    const MIN_CHARACTERS = 5;
    regExp.test(email); // retorna verdadeiro ou falso
    if (regExp.test(email) && password.length > MIN_CHARACTERS) {
      this.setState({
        incorrectInfo: false,
      });
    } else {
      this.setState({
        incorrectInfo: true,
      });
    }
  }

  redirect() {
    const { history } = this.props;
    history.push('/carteira');
  }

  render() {
    const { email, password, incorrectInfo } = this.state;
    return (
      <div className="form-content">
        <div className="icon-trybe">Login</div>
        <form>
          <label htmlFor="email-input">
            <input
              data-test-id="email-input"
              type="email"
              name="email"
              id="email-input"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            <input
              data-test-id="password-input"
              type="password"
              name="password"
              id="password-input"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ incorrectInfo }
            onClick={ this.redirect }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape(PropTypes.any).isRequired,
};

export default Login;
