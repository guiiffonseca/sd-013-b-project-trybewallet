import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import setUser from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.validation = this.validation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    }, () => this.validation());
  }

  validation() { // regex from stackoverflow
    const { email, password } = this.state;
    const mailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    const validMail = mailCheck.test(email); // true or false
    const passMinDig = 6;
    const passCheck = password.length >= passMinDig; // true or false
    if (validMail && passCheck) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  render() {
    const { email, password, disabled } = this.state;
    const { check } = this.props;
    return (
      <form>
        <input
          name="email"
          type="email"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          name="password"
          type="password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disabled }
            onClick={ () => check({ email, password }) }
          >
            Entrar
          </button>
        </Link>
      </form>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  check: (payload) => dispatch(setUser(payload)),
});

Login.propTypes = {
  check: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
