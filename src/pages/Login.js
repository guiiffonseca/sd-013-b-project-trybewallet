import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validInput = this.validInput.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleClick(event) {
    event.preventDefault();
    const { createEmail, history } = this.props;
    const { email } = this.state;
    createEmail(email);
    history.push('/carteira');
  }

  validInput() {
    const { email, password } = this.state;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const lengthSix = 5;
    if ((re.test(email) && password.length > lengthSix)) {
      return false;
    }
    return true;
  }

  async handleChange({ target: { id, value } }) {
    await this.setState({
      [id]: value,
    });
  }

  render() {
    return (
      <div>
        <label htmlFor="email">
          Email
          <input
            data-testid="email-input"
            placeholder="Insira seu email"
            id="email"
            type="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            data-testid="password-input"
            placeholder="Insira uma senha"
            id="password"
            type="password"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          onClick={ this.handleClick }
          disabled={ this.validInput() }
        >
          Entrar
        </button>
      </div>
    );
  }
}
Login.propTypes = {
  createEmail: func,
}.isRequired;
const mapDispatchToProps = (dispatch) => ({
  createEmail: (state) => dispatch(saveEmail(state)) });
export default connect(null, mapDispatchToProps)(Login);

// Referências:
// Atualizar a página: https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4
