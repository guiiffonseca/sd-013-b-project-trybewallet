import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import actionLogin from '../actions/index';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validar = this.validar.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    // segunda solução
    // a callback faz com que a função só seja chamada quando realmente o estado for mudado na tela
    /** Source:  https://stackoverflow.com/questions/42038590/when-to-use-react-setstate-callback */
    // }, () => this.validarEmailSenha());
  }
  // validarEmailSenha() {
  //   const { senha, email } = this.state;
  //   const validationEmail = /(.*)@(.*).com/;
  //   const PASSWORD_LENGTH = 6;
  //   if (validationEmail.test(email) && senha.length >= PASSWORD_LENGTH) {
  //     this.setState({ validate: false });
  //   }
  // }

  validar() {
    const { senha, email } = this.state;
    const validationEmail = /(.*)@(.*).com/;
    const PASSWORD_LENGTH = 6;
    if (validationEmail.test(email) && senha.length >= PASSWORD_LENGTH) {
      return false;
    }
    return true;
  }

  render() {
    const { callFunc } = this.props;
    const { email } = this.state;
    return (
      <div>
        <h1>Tela de login</h1>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            placeholder="Digite seu email..."
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <label htmlFor="senha">
          Senha:
          <input
            type="password"
            name="senha"
            placeholder="Digite sua senha..."
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ this.validar() }
            onClick={ () => callFunc(email) }
          >
            {' '}
            Entrar
            {' '}
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  callFunc: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  callFunc: (email) => dispatch(actionLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
