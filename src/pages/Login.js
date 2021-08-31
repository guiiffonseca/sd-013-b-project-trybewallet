import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fazerLogin } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      btn: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  onSubmitForm() {
    const { history, dispatchValue } = this.props;
    const { email } = this.state;
    dispatchValue(email);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.validateEmail();
  }

  validateEmail() {
    const { email, password } = this.state;
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const min = 5;
    if (email.match(emailRegex) && password.length >= min) {
      this.setState({
        btn: false,
      });
    }
  }

  render() {
    const { email, btn } = this.state;
    return (
      <div>
        <br />
        <h4>Fazer Login</h4>
        <form>
          <label htmlFor="email">
            User:
            <input
              data-testid="email-input"
              type="email"
              id="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <label htmlFor="password">
            Password:
            <input
              data-testid="password-input"
              type="password"
              id="password"
              name="password"
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <button
            type="submit"
            disabled={ btn }
            onClick={ this.onSubmitForm }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchValue: (stateComponent) => dispatch(fazerLogin(stateComponent)),
}
);

export default connect(null, mapDispatchToProps)(Login);
