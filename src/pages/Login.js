import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setEmail as setEmailA, setLogged as setLoggedA } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.handleButtonLock = this.handleButtonLock.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // Desabilita o botão ao montar a tela
  componentDidMount() {
    const button = document.getElementById('loginButton');
    button.disabled = true;
  }

  // pega o valor do campo "EMAIL" e seta no REDUX
  handleClick() {
    const { setEmail, setLogged } = this.props;
    const emailInput = document.getElementById('emailInput').value;
    setLogged(true);
    setEmail(emailInput);
  }

  // pega o valor de "EMAIL" e "SENHA" e habilita o botão caso passe na validação
  handleButtonLock() {
    const emailInput = document.getElementById('emailInput').value;
    const passwordInput = document.getElementById('passwordInput').value;
    const button = document.getElementById('loginButton');
    const NUMBER = 5;
    if (passwordInput.length > NUMBER && emailInput.length > NUMBER) {
      if (emailInput.includes('.com') && emailInput.indexOf('@') > 0) {
        button.disabled = false;
      }
    } else {
      button.disabled = true;
    }
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email
            <input
              onChange={ this.handleButtonLock }
              type="email"
              id="emailInput"
              name="email"
              data-testid="email-input"
              required
            />
          </label>
          <label htmlFor="senha">
            Senha
            <input
              onChange={ this.handleButtonLock }
              type="password"
              nama="senha"
              data-testid="password-input"
              minLength="6"
              id="passwordInput"
              required
            />
          </label>
          <Link to="/carteira">
            <button
              onClick={ this.handleClick }
              type="button"
              name="entrar"
              value="Entrar"
              id="loginButton"
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmail: (payload) => dispatch(setEmailA(payload)),
  setLogged: (payload) => dispatch(setLoggedA(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
  setLogged: PropTypes.func.isRequired,
};
