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
      // password: '',
      validEmail: false,
      validPassword: false,
      disableButton: true,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.enableOrDisableButton = this.enableOrDisableButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  enableOrDisableButton() {
    const { validEmail, validPassword } = this.state;

    this.setState({
      disableButton: (!validEmail || !validPassword),
    });
  }

  handleChange({ target }) {
    console.log(`MIN LENGTH: ${target.minLength}`);
    console.log(`CURRENT: ${target.value.length}`);
    console.log(`VALID: ${target.checkValidity()}`);

    this.setState({
      [target.name]: target.value,
      [target.id]: target.checkValidity(),
    });

    this.enableOrDisableButton();
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
      <div className="login-card">
        <Input
          testid="email-input"
          type="email"
          name="email"
          id="validEmail"
          label="E-mail"
          change={ this.handleChange }
        />

        <Input
          testid="password-input"
          type="password"
          name="password"
          id="validPassword"
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
