import React from 'react';
import { connect } from 'react-redux';
import loginAction from '../actions';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      button: true,
    };

    this.loginChanges = this.loginChanges.bind(this);
  }

  loginChanges({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    const { email, password } = this.state;
    const number = [-1, 5];
    if (email.indexOf('@') !== number[0] && password.length >= number[1]) {
      if (email.indexOf('.com') !== number[0]) {
        this.setState({ button: false });
      };
    }
    else this.setState({ button: true });
  }

  render() {
    const { email, password, button } = this.state;
    const { loginValues, history } = this.props;
    return (<div className="login-field">
      <form>
        <input
          type="email"
          value={ email }
          name="email"
          data-testid="email-input"
          placeholder="Digite seu email..."
          onChange={ this.loginChanges }
        />
        <input
          type="password"
          value={ password }
          name="password"
          data-testid="password-input"
          placeholder="Digite sua senha..."
          onChange={ this.loginChanges }
        />
        <button
          type="button"
          disabled={ button }
          onClick={ () => {
            loginValues(email);
            history.push('/carteira')
          } }
        >
          Entrar
        </button>
      </form>
    </div>)
  }
};

const mapDispatchToProps = (dispatch) => ({
  loginValues: (email) => dispatch(loginAction(email)),
})

Login.propTypes = {
  loginValues: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default connect(null, mapDispatchToProps)(Login);
