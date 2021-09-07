import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEmail as saveEmailAction } from '../actions';

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
    }, () => this.validation()); // essa callback é chamada junto com a atualização do estado
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
    const { history, saveEmail } = this.props;
    const { email } = this.state;
    saveEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, incorrectInfo } = this.state;
    return (
      <div className="form-content">
        <div className="icon-trybe">Login</div>
        <form>
          <label htmlFor="email-field">
            <input
              data-testid="email-input"
              type="email"
              name="email"
              id="email-field"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-field">
            <input
              data-testid="password-input"
              type="password"
              name="password"
              id="password-field"
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
  saveEmail: PropTypes.func.isRequired,
};

const mapDispatchtoProps = (dispatch) => ({
  saveEmail: (state) => dispatch(saveEmailAction(state)),
});

export default connect(null, mapDispatchtoProps)(Login);
