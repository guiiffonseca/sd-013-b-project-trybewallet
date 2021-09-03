import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { setUserValue, getCurrencyThunk } from '../actions/index';

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

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { history, dispatchSetValue /* getCurrency */ } = this.props;
    dispatchSetValue(this.state);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const maxLength = 6;
    let enable = true;
    if (email.includes('@' && '.com') && password.length >= maxLength) {
      enable = false;
    } else {
      enable = true;
    }

    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="email">
          <input
            id="email"
            data-testid="email-input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            data-testid="password-input"
            type="password"
            name="password"
            minLength="6"
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
  dispatchSetValue: (value) => dispatch(setUserValue(value)),
  getCurrency: () => dispatch(getCurrencyThunk()),

});

export default connect(null, mapDispatchToProps)(Login);
