import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setEmail } from '../actions';
import LoginForm from './Login/LoginForm';

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
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { email } = this.state;
    const { newEmail } = this.props;
    newEmail(email);
  }

  render() {
    const { email, password } = this.state;
    return (
      <LoginForm
        email={ email }
        password={ password }
        handleChange={ this.handleChange }
        handleClick={ this.handleClick }
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  newEmail: (payload) => dispatch(setEmail(payload)),
});

Login.propTypes = {
  newEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
