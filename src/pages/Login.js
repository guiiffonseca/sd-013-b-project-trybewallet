import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loginAction from '../actions/index';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validacaoObrigatoria = this.validacaoObrigatoria.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }
  /** Source: https://stackoverflow.com/questions/42038590/when-to-use-react-setstate-callback */

  validacaoObrigatoria() {
    const { senha, email } = this.state;
    const validaEmail = /(.*)@(.*).com/;
    const PASSWORD_LENGTH = 6;
    if (validaEmail.test(email) && senha.length >= PASSWORD_LENGTH) {
      return false;
    }
    return true;
  }

  render() {
    const { callBackFunc } = this.props;
    const { email } = this.state;
    return (
      <div>
        <h1>Tela de login</h1>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ this.handleChange }
            placeholder="Email..."
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            type="password"
            name="senha"
            data-testid="password-input"
            onChange={ this.handleChange }
            placeholder="Senha..."
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ this.validacaoObrigatoria() }
            onClick={ () => callBackFunc(email) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  callBackFunc: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  callBackFunc: (email) => dispatch(loginAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
