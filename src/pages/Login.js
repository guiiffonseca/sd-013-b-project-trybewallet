import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitEmail } from '../actions';

const NUMBER_OF_CHAR = 6;

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
    // lógica do history.push retirada do gabarito do exercício de forms redux
    const { history, dispatchEmail } = this.props;
    const { email } = this.state;
    dispatchEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <forms>
        <input
          type="text"
          name="email"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={
            // verficação retirada do link: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
            email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && password.length >= NUMBER_OF_CHAR
              ? ''
              : 'true'
          }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </forms>
    );
  }
}

Login.propTypes = {
  dispatchEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (userEmail) => dispatch(submitEmail(userEmail)),
});

export default connect(null, mapDispatchToProps)(Login);
