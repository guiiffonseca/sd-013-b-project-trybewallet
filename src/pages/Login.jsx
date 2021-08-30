import React from 'react';
import { connect } from 'react-redux';
import loginAction from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      button: true,
    }

    this.loginChanges = this.loginChanges.bind(this);
  }

  loginChanges({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    const { email, password } = this.state;
    if(email.indexOf('@') !== -1 && password.length >= 5) {
      if(email.indexOf('.com') !== -1) this.setState({ button: false });
    }
    else this.setState({ button: true });
  }

  render() {
    const { email, password, button } = this.state;
    const { loginValues, history } = this.props;
    return <div className="login-field">
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
    </div>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginValues: (email) => dispatch(loginAction(email)),
})

export default connect(null, mapDispatchToProps)(Login);
