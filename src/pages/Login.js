import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setEmail, setExpenses } from '../actions';
import LoginForm from './Login/LoginForm';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      expenses: 0,
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
    const { email, expenses } = this.state;
    const { newEmail, startExpenses } = this.props;
    newEmail(email);
    startExpenses(expenses);
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
  startExpenses: (payload) => dispatch(setExpenses(payload)),
});

Login.propTypes = {
  newEmail: PropTypes.func.isRequired,
  startExpenses: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

