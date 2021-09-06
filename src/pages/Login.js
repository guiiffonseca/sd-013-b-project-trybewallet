import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.validaLogin = this.validaLogin.bind(this);
    this.redirectToTarget = this.redirectToTarget.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  // https://medium.com/@anneeb/redirecting-in-react-4de5e517354a

  redirectToTarget() {
    const { history, userEmail } = this.props;
    const { email } = this.state;
    userEmail(email);
    history.push('/carteira');
  }

  validaLogin() {
    const { email, password } = this.state;
    const passwordLength = 6;
    let loginValidado = true;

    if (email.includes('@' && '.com') && password.length >= passwordLength) {
      loginValidado = false;
    } else {
      loginValidado = true;
    }
    return loginValidado;
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            className="em-input"
            type="email"
            data-testid="email-input"
            name="email"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>

        <label htmlFor="password">
          <input
            className="em-input"
            type="text"
            data-testid="password-input"
            name="password"
            onChange={ this.handleChange }
            value={ password }
          />
        </label>

        <button
          type="submit"
          onClick={ this.redirectToTarget }
          disabled={ this.validaLogin() }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  userEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userEmail: (email) => dispatch(userAction(email)),

});

export default connect(null, mapDispatchToProps)(Login);
