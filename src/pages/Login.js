import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { validaEmail } from '../actions/index';
// rpc@rpc.com
// https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
const isEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};
const isPassword = (password) => {
  const re = /^.{6,}$/g;
  return re.test(password);
};

class Login extends React.Component {
  constructor() {
    super();
    this.handelChange = this.handelChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
    this.myRef = React.createRef();

    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    this.myRef.current.disabled = true;
  }

  componentDidUpdate() {
    const { email, password } = this.state;
    if (isEmail(email) || isPassword(password)) this.myRef.current.disabled = false;
    if (!isPassword(password)) this.myRef.current.disabled = true;
    if (!isEmail(email)) this.myRef.current.disabled = true;
  }

  handelChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handelSubmit() {
    const { history, setEmail } = this.props;
    const { email } = this.state;
    history.push('/carteira');
    setEmail(email);
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={ email }
            onChange={ this.handelChange }
          />
        </label>

        <label htmlFor="password">
          <input
            type="password"
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handelChange }
            placeholder="password"
          />
        </label>
        <button
          type="submit"
          onClick={ this.handelSubmit }
          ref={ this.myRef }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  setEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(validaEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
