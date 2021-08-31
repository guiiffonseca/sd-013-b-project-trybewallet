import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginEmail as loginEmailAction } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.state = {
      email: '',
      senha: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleDisabled() {
    // https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const { senha, email } = this.state;
    const rgx = /\S+@\S+\.\S+/;
    const lengthPassword = 5;
    if (rgx.test(email) && senha.length > lengthPassword) {
      return true;
    }
  }

  handleButton() {
    const { loginEmail /* history */ } = this.props;
    const { email } = this.state;
    loginEmail(email);
    // history.push('/carteira');
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div>
        <fieldset>
          Email
          <input
            onChange={ this.handleChange }
            data-testid="email-input"
            value={ email }
            name="email"
            type="email"
            label="email"
          />
          Senha
          <input
            onChange={ this.handleChange }
            data-testid="password-input"
            value={ senha }
            name="senha"
            type="password"
          />
          <Link to="/carteira">
            <button
              onClick={ this.handleButton }
              type="button"
              disabled={ !this.handleDisabled() }
            >
              Entrar
            </button>
          </Link>
        </fieldset>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginEmail: (email) => dispatch(loginEmailAction(email)),
});

Login.propTypes = {
  loginEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
