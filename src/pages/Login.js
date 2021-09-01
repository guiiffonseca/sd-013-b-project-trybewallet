import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addEmail from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusButton: true,
      email: '',
      senha: '',
      redirect: false,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.verifyEmail = this.verifyEmail.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.changeRote = this.changeRote.bind(this);
  }

  verifyEmail(email) {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    return emailRegex.test(email);
  }

  handleEmailChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
    this.checkStatus();
  }

  handlePassChange({ target }) {
    const { value } = target;
    this.setState({
      senha: value,
    });
    this.checkStatus();
  }

  checkStatus() {
    const { email, senha } = this.state;
    const status = this.verifyEmail(email);
    const size = 5;
    if (status === true && senha.length === size) {
      this.setState({ statusButton: false });
    } else {
      this.setState({ statusButton: true });
    }
  }

  changeRote() {
    this.setState({ redirect: true });
  }

  render() {
    const { add } = this.props;
    const { statusButton, email, senha, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <div>
        <input
          name="email"
          type="email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleEmailChange }
        />
        <input
          type="text"
          data-testid="password-input"
          value={ senha }
          onChange={ this.handlePassChange }
        />
        <button
          type="button"
          disabled={ statusButton }
          onClick={ () => { add(email); this.changeRote(); } }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  add: PropTypes.func.isRequired,
};

const mapDispatchtoProps = (dispatch) => ({
  add: (email) => dispatch(addEmail(email)),
});

export default connect(null, mapDispatchtoProps)(Login);
