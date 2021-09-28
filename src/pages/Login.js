import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { storeUsers } from '../actions/index';

class Login extends Component {
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
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { history, dispatchSetValue } = this.props;
    const { email } = this.state;
    dispatchSetValue(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const PASSWORD_LENGTH = 6;
    let valid = true;
    if (email.includes('@' && '.com') && password.length >= PASSWORD_LENGTH) {
      valid = false;
    } else {
      valid = true;
    }

    return (
      <div>
        <form>
          <input
            type="email"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
          <button
            onClick={ this.handleClick }
            disabled={ valid }
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (value) => dispatch(storeUsers(value)),
});

export default connect(null, mapDispatchToProps)(Login);
