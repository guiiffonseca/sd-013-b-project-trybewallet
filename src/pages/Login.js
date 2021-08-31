import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import component from '../components';
import functions from '../services';
import action from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    // this.state = {
    //   user: {},
    //   wallet: {},
    // };
    this.loginInputChange = this.loginInputChange.bind(this);
  }

  loginInputChange(event) {
    // source: https://stackoverflow.com/questions/22683358/
    // email - validation - expression - w - w - w - w - w - w - allows
    const emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
    const { type, value } = event.target;
    const buttonId = 'button-login';
    const six = 6;
    const emailInput = document.getElementById('email-login');
    const passwordInput = document.getElementById('password-login');
    const { user } = this.props;
    if (type === 'email' && emailPattern.test(value)) {
      user(event.target.value);
    }
    // if (type === 'text' && value.length >= six) {
    //   user()
    // }
    if (
      emailPattern.test(emailInput.value)
&& passwordInput.value.length >= six
    ) {
      document.getElementById(buttonId).disabled = false;
    } else {
      document.getElementById(buttonId).disabled = true;
    }
  }

  render() {
    const EMAIL_INPUT_TEST_ID = 'email-input';
    const PASSWORD_INPUT_TEST_ID = 'password-input';
    // console.log(this.props);

    return (
      <form>
        <div>TrybeWallet I AM LOGIN</div>
        <component.Input
          inputId="email-login"
          testId={ EMAIL_INPUT_TEST_ID }
          type="email"
          onChange={ this.loginInputChange }
          labelText="e-mail: "
        />
        <component.Input
          inputId="password-login"
          testId={ PASSWORD_INPUT_TEST_ID }
          type="text"
          onChange={ this.loginInputChange }
          labelText="password: "
        />
        <Link to="/carteira">
          <component.Button
            id="button-login"
            type="button"
            onClick={ functions.loginButtonClick }
            text="Entrar"
            shouldEnable
          />
        </Link>
      </form>
    );
  }
}

Login.propTypes = {
  user: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    globalState: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    user: (item) => dispatch(action.user(item)),
    // updateISSLocation: async () => await dispatch(action.updateISSLocation()),
    // getISSLocation: () => dispatch(action.getISSLocationThunk()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
