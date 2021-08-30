import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { submitLogin } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validLogin: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
  }

  onSubmitLogin() {
    const { history, submitUser } = this.props;
    submitUser(this.state);
    history.push('/carteira');
  }

  checkLogin() {
    const { password } = this.state;
    const MIN_LENGTH = 6;

    if (password.length >= MIN_LENGTH) {
      this.setState({
        validLogin: true,
      });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.checkLogin());
  }

  render() {
    const { email, password, validLogin } = this.state;
    const checkEmail = () => {
      const regexEmail = /\S+@\S+\.\S+/;
      const check = regexEmail.test(email);
      return check;
    };
    return (
      <form>
        <Input
          name="email"
          type="email"
          id="email"
          value={ email }
          placeholder="exemplo@exemplo.com"
          testId="email-input"
          onChange={ this.handleChange }
        />
        <Input
          name="password"
          type="password"
          id="password"
          value={ password }
          placeholder="senha"
          testId="password-input"
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !validLogin || !checkEmail() }
            onClick={ this.onSubmitLogin }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  submitUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  submitUser: (value) => dispatch(submitLogin(value)),
});

export default connect(null, mapDispatchToProps)(Login);
