import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from '../components/Input';
import { setUser as setUserAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChanges = this.handleChanges.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { email } = this.state;
    const { history, setUser } = this.props;
    setUser(email);
    history.push('/carteira');
  }

  isToActivateButton() {
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const minimumPasswordLength = 6;
    const { email, password } = this.state;
    const isValidEmail = regex.test(email);
    const isValidPassword = password.length >= minimumPasswordLength;

    if (isValidEmail && isValidPassword) {
      return true;
    }
    return false;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <Input
            type="text"
            name="email"
            value={ email }
            id="email"
            dataTestId="email-input"
            placeholder="exemplo@exemplo.com"
            onChange={ this.handleChanges }
          />
          <Input
            type="password"
            name="password"
            value={ password }
            id="password"
            dataTestId="password-input"
            placeholder="senha"
            onChange={ this.handleChanges }
          />
          <button
            type="button"
            disabled={ !this.isToActivateButton() }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (payload) => dispatch(setUserAction(payload)),
});

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
