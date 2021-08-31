import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogin } from '../actions';
import '../App.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { setUserInfo } = this.props;
    const { email, password } = this.state;
    const passwordLengthMin = 6;
    const checkEmail = () => {
      const entries = /\S+@\S+\.\S+/;
      const checkEntries = entries.test(email);
      return checkEntries;
    };
    const checkPassword = password.length >= passwordLengthMin;
    return (
      <div className="divLogin">
        <h1>Carteira Online</h1>
        <img className="imgLogin" src="https://st2.depositphotos.com/2197700/12281/i/600/depositphotos_122815918-stock-photo-concept-of-digital-wallet-and.jpg"></img>
        <form className="FormLogin">
          <label htmlFor="email">
            <input
              className="Inputs"
              value={ email }
              id="email"
              type="email"
              name="email"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            <input
              className="Inputs"
              value={ password }
              id="password"
              type="password"
              name="password"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
          <Link
            onClick={ () => (setUserInfo(email)) }
            to="/carteira"
          >
            <button
              className="Button"
              type="submit"
              disabled={ !(checkEmail() && checkPassword) }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchProps = (dispatch) => ({
  setUserInfo: (email) => dispatch(userLogin(email)),
});

Login.propTypes = {
  setUser: Proptypes.func,
}.isRequired;

export default connect(null, mapDispatchProps)(Login);

//  https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
