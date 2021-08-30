import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import logIn from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      shouldRedirect: false,
    };

    this.renderPasswordInput = this.renderPasswordInput.bind(this);
    this.renderEmailInput = this.renderEmailInput.bind(this);
    this.renderSubmitButton = this.renderSubmitButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const eventName = event.target.name;
    this.setState({
      [eventName]: event.target.value,
    });
  }

  renderEmailInput() {
    const { email } = this.state;
    return (
      <div>
        <label htmlFor="email-input">
          Email
          <input
            type="email"
            name="email"
            value={ email }
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <br />
      </div>
    );
  }

  renderPasswordInput() {
    const { password } = this.state;
    return (
      <div>
        <label htmlFor="password-input">
          Password
          <input
            type="password"
            name="password"
            value={ password }
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }

  renderSubmitButton() {
    const { email, password } = this.state;
    const { logInProp } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ () => {
            logInProp({ email, password });
            this.setState({ shouldRedirect: true });
          } }
        >
          Entrar
        </button>
      </div>
    );
  }

  render() {
    const { renderEmailInput,
      renderPasswordInput,
      renderSubmitButton } = this;

    const { shouldRedirect } = this.state;
    if (shouldRedirect === true) {
      return <Redirect to="/carteira" />;
    }
    return (
      <form>
        {renderEmailInput()}
        {renderPasswordInput()}
        {renderSubmitButton()}
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logInProp: (payload) => dispatch(logIn(payload)),
});

Login.propTypes = {
  logInProp: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
