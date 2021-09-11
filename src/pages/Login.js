import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setEmail as emailAction, setExpenses } from '../actions';

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
    // const button = target.parentNode.lastChild;
    // const { email, password } = this.state;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { email } = this.state;
    const { setEmail } = this.props;
    setEmail(email);
    setExpenses(0);
  }

  render() {
    const { email, password } = this.state;
    const MIN_PASSWORD = 6;
    console.log(email);
    return (
      <div>
        <form>
          <input
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ this.handleChange }
            value={ email }
          />
          <br />
          <input
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ this.handleChange }
            value={ password }
          />
          <br />
          <Link to="/carteira">
            <button
              type="button"
              id="input-button"
              onClick={ this.handleClick }
              disabled={ !/\S+@\S+\.\S+/.test(email) || password.length < MIN_PASSWORD }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmail: (payload) => dispatch(emailAction(payload)),
});

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
