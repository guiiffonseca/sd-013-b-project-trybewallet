import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { setUsersValue } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { history, dispatchSetValue } = this.props;
    dispatchSetValue(this.state);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const N = 6;
    let enable = true;

    if (email.includes('@' && '.com') && password.length >= N) {
      enable = false;
    } else {
      enable = true;
    }
    return (
      <form onSubmit={ this.handleSubmit }>
        <h1>{email}</h1>
        <h1>{password}</h1>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            data-testid="password-input"
            type="password"
            name="password"
            minLength="8"
            placeholder="Senha"
            onChange={ this.handleChange }
          />
        </label>
        <button disabled={ enable } id="btn__submit" type="submit">Entrar</button>
      </form>
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
  dispatchSetValue: (value) => dispatch(setUsersValue(value)),
});

export default connect(null, mapDispatchToProps)(Login);
