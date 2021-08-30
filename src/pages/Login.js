import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateUser as updateUserAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      email: '',
      password: '',
      emailOk: false,
      passwordOk: false,
    };
  }

  async handleEmailChange({ target }) {
    const { value } = target;
    this.setState({ email: value });
    // Função includes() sugerida por Nikolai, em monitoria
    if (value.includes('@' && '.com')) {
      this.setState({ emailOk: true });
    }
  }

  async handlePasswordChange({ target }) {
    const { value } = target;
    const minLenght = 6;
    this.setState({ password: value });
    if (value.length >= minLenght) {
      this.setState({ passwordOk: true });
    }
  }

  handleClick() {
    const { updateUser, history } = this.props;
    updateUser(this.state);
    history.push('/carteira');
  }

  render() {
    const { email, password, emailOk, passwordOk } = this.state;
    const minLenght = 6;
    return (
      <div>
        <p>Hello, TrybeWallet!</p>
        Login:
        <input
          type="text"
          data-testid="email-input"
          onChange={ this.handleEmailChange }
          value={ email }
        />
        { (email !== '' && !email.includes('@' && '.com'))
        && <p>Invalid email format!</p> }
        Password:
        <input
          type="text"
          data-testid="password-input"
          onChange={ this.handlePasswordChange }
          value={ password }
        />
        { (password.length <= minLenght && password.length !== 0)
        && <p>Invalid Password: Too short!</p> }
        <button
          type="button"
          disabled={ !(emailOk && passwordOk) }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateUser: (state) => dispatch(updateUserAction(state)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  updateUser: PropTypes.func.isRequired,
  history: PropTypes.objectOf().isRequired,
};
