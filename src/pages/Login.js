import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import Button from '../components/LoginButton';
import { loginAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick() {
    const { loginDispatch, history } = this.props;
    const { email } = this.state;
    loginDispatch(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div>Login</div>
        <div>
          <EmailInput
            handleChange={ this.handleChange }
            email={ email }
          />
          <PasswordInput
            handleChange={ this.handleChange }
            password={ password }
          />
          <Button
            state={ this.state }
            handleClick={ this.handleClick }
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: (payload) => (dispatch(loginAction(payload))),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.object,
  loginDispatch: PropTypes.func,
}.isRequired;
