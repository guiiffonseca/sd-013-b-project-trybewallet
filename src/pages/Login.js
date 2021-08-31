import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveEmail } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailInput: '',
      passwordInput: 0,
      disable: true,
    };

    this.holdFieldValue = this.holdFieldValue.bind(this);
    this.activatesLoginButton = this.activatesLoginButton.bind(this);
  }

  holdFieldValue(name, value) {
    this.setState({
      [name]: value,
    }, () => this.activatesLoginButton());
  }

  verifyEmailFormat() {
    const { emailInput } = this.state;
    const isTrueOrFalse = emailInput.includes('@') && emailInput.endsWith('.com');
    return isTrueOrFalse;
  }

  verifyPasswordLength() {
    const { passwordInput } = this.state;
    const minimunPasswordLength = 6;
    return passwordInput >= minimunPasswordLength;
  }

  activatesLoginButton() {
    const email = this.verifyEmailFormat();
    const password = this.verifyPasswordLength();
    if (email && password) {
      this.setState({
        disable: false,
      });
    } else {
      this.setState({
        disable: true,
      });
    }
  }

  renderFormFields() {
    const { disable, emailInput } = this.state;
    const { saveUserEmail } = this.props;
    return (
      <form>
        <input
          data-testid="email-input"
          placeholder="E-mail"
          name="emailInput"
          onChange={ ({ target }) => this.holdFieldValue(target.name, target.value) }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Senha"
          name="passwordInput"
          onChange={ ({ target }) => this
            .holdFieldValue(target.name, target.value.length) }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disable }
            onClick={ () => saveUserEmail(emailInput) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }

  render() {
    return this.renderFormFields();
  }
}

Login.propTypes = {
  saveUserEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveUserEmail: (state) => dispatch(saveEmail(state)),
});

export default connect(null, mapDispatchToProps)(Login);
