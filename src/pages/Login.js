import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import action from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
    const CINCO = 5;
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    const { user } = this.props;

    if (
      emailPattern.test(emailInput.value)
&& passwordInput.value.length > CINCO
    ) {
      document.getElementById('login-btn').disabled = false;
      user(emailInput.value);
    } else {
      document.getElementById('login-btn').disabled = true;
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>Login</div>
        <input
          id="email-input"
          data-testid="email-input"
          type="text"
          onChange={ this.handleChange }
        />
        <input
          id="password-input"
          data-testid="password-input"
          type="password"
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button id="login-btn" type="button" disabled>Entrar</button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    user: (item) => dispatch(action.user(item)),
    // user: (item) => dispatch({ type: 'USER', payload: item }),
  };
}

export default connect(null, mapDispatchToProps)(Login);
