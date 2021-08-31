import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setEmail as setEmailAction } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validation: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    },
    () => {
      this.validate();
    });
  }

  handleClick() {
    const { email } = this.state;
    const { setEmail } = this.props;
    setEmail(email);
  }

  validate() {
    const { email, password } = this.state;
    // Regex fonte https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const regex = /\S+@\S+\.\S+/;
    const emailValidation = regex.test(email);
    const minPassLength = 6;
    if (emailValidation === true && password.length >= minPassLength) {
      this.setState({
        validation: true,
      });
    } else {
      this.setState({
        validation: false,
      });
    }
  }

  render() {
    const { email, password, validation } = this.state;
    return (
      <div>
        <input
          placeholder="email@exemplo.com"
          type="email"
          name="email"
          id="email"
          data-testId="email-input"
          required
          onChange={ this.handleChange }
          value={ email }
        />
        <input
          placeholder="senha"
          type="password"
          name="password"
          id="password"
          data-testid="password-input"
          required
          onChange={ this.handleChange }
          value={ password }
        />
        <Link to="/carteira">
          <button
            type="button"
            id="send-button"
            disabled={ !validation }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  // history: PropTypes.objectOf(PropTypes.any).isRequired,
  setEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setEmail: (payload) => dispatch(setEmailAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
