import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { login as loginAction } from '../actions';
import { Input, Button } from '../components/Index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailIsValid: false,
      passwordIsValid: false,
      disableButton: true,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.enableOrDisableButton = this.enableOrDisableButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  enableOrDisableButton() {
    const { emailIsValid, passwordIsValid } = this.state;

    this.setState({
      disableButton: (!emailIsValid || !passwordIsValid),
    });
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
      [target.id]: target.checkValidity(),
    }, () => {
      this.enableOrDisableButton();
    });
  }

  handleLogin() {
    const { email } = this.state;
    const { login, history } = this.props;

    login(email);
    history.push('/carteira');
  }

  render() {
    const { disableButton } = this.state;

    return (
      <main className="login-main main">
        <div className="login-card">
          <Input
            testid="email-input"
            type="email"
            name="email"
            id="emailIsValid"
            label="E-mail"
            change={ this.handleChange }
          />

          <Input
            testid="password-input"
            type="password"
            name="password"
            id="passwordIsValid"
            label="Password"
            change={ this.handleChange }
            minLength={ 6 }
          />

          <Button
            label="Entrar"
            disable={ disableButton }
            click={ this.handleLogin }
          />
        </div>
      </main>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
