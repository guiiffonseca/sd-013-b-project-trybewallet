import React from 'react';
import PropTypes from 'prop-types';
import { userEmail as userEmailAction } from '../actions/index'
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      pass: '',
      btnDisable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.enableToComeInButton = this.enableToComeInButton.bind(this);
    this.toComeIn = this.toComeIn.bind(this);
  }

  // event.target.name / value
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });

    this.enableToComeInButton();
  }

  toComeIn() {
    const { history, userEmail } = this.props;
    const { email } = this.state;
    // está em mapDispatchToProps
    userEmail(email);
    history.push('/carteira');
  }

  // baseada no CR de @raugusto96
  enableToComeInButton() {
    const { email, pass } = this.state;
    const emailRegExValidation = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
    const passValidationLength = 5; // o pass.value começa em [0]

    const emailIsValid = emailRegExValidation.test(email) === true
      && pass.length >= passValidationLength;

    this.setState({ btnDisable: !emailIsValid });
  }

  render() {
    console.log(this.props);
    const { email, pass, btnDisable } = this.state;

    return (
      <div>
        <h2>Login</h2>
        <form>

          <div>
            <label htmlFor="email-input">
              E-mail:
              <input
                type="email"
                data-testid="email-input"
                name="email"
                value={ email }
                onChange={ this.handleChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor="password-input">
              Senha:
              <input
                type="password"
                data-testid="password-input"
                name="pass"
                value={ pass }
                onChange={ this.handleChange }
              />
            </label>
          </div>

          <div>
            <input
              type="button"
              value="Entrar"
              disabled={ btnDisable }
              onClick={ this.toComeIn }
            />
          </div>

        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.func).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userEmail: (payload) => dispatch(userEmailAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
