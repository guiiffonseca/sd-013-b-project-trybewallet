import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setEmail, setExpenses } from '../actions';
import Form from './Login/Form';

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
    setExpenses(0);
  }

  render() {
    const { email, password } = this.state;
    const MIN_PASSWORD = 6;
    return (
      <Form
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
