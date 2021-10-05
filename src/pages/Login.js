import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { updateUsers } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      blockSubmit: true,
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // pesquisei para fazer validação de email https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/

  validateInputs() {
    const { email, senha } = this.state;
    const validateEmail = /\S+@\S+\.\S+/;
    const validatePassword = 5;

    if (validateEmail.test(email) && senha.length >= validatePassword) {
      this.setState({ blockSubmit: false });
    } else {
      this.setState({ blockSubmit: true });
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
    this.validateInputs();
  }

  handleClick() {
    const { authentication } = this.props;
    const { email } = this.state;
    authentication(email);
    this.setState({ redirect: true });
  }

  render() {
    const { email, senha, blockSubmit, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/carteira" />;
    }

    return (
      <form>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }
        />

        <input
          type="password"
          name="senha"
          data-testid="password-input"
          value={ senha }
          onChange={ this.handleChange }
        />

        <button
          type="button"
          disabled={ blockSubmit }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  authentication: (email) => dispatch(updateUsers(email)),
});

Login.propTypes = {
  authentication: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
