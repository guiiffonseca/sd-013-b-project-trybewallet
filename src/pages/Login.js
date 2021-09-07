import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setEmail } from '../actions/index';
import Input from '../components/Input';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      validEmail: false,
      validPassword: false,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.checkValidEmail = this.checkValidEmail.bind(this);
    this.checkValidPassword = this.checkValidPassword.bind(this);
  }

  handleOnChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // Source: https://github.com/tryber/sd-013-b-project-trybewallet/pull/44
  checkValidEmail({ target }) {
    const { value } = target;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    this.setState({
      email: value,
      validEmail: isValidEmail.test(value),
    });
  }

  checkValidPassword({ target }) {
    const { value } = target;
    const minCharacters = 6;

    this.setState({
      password: value,
      validPassword: value.length >= minCharacters,
    });
  }

  handleOnClick() {
    const { history } = this.props;
    const { email } = this.state;

    setEmail(email);
    history.push('./carteira');
  }

  render() {
    const { email, password, validEmail, validPassword } = this.state;
    return (
      <div className="login-inputs">
        <Input
          label="Email"
          type="text"
          name="email"
          onChange={ this.checkValidEmail }
          value={ email }
          data-testid="email-input"
        />
        <Input
          label="Senha"
          type="password"
          value={ password }
          name="password"
          onChange={ this.checkValidPassword }
          data-testid="password-input"
        />
        <button
          type="button"
          disabled={ !(validEmail && validPassword) }
          onClick={ this.handleOnClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(setEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
