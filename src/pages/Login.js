import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveUserInfo } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { type, value } }) {
    const { email, password } = this.state;
    const MIN_CHAR = 4;
    const emailFormat = /\S+@\S+\.\S+/;
    this.setState({
      [type]: value,
    });
    if (password.length > MIN_CHAR && emailFormat.test(email)) {
      this.setState({ disabled: false });
    }
  }

  // handleSubmit() {
  //   const { emailInputed } = this.props;
  //   const { email } = this.state;
  //   console.log(email);
  //   emailInputed(email);
  // }

  render() {
    const { disabled, email } = this.state;
    const { emailInputed } = this.props;
    return (
      <form>
        <label htmlFor="login-input">
          <input type="email" data-testid="email-input" onChange={ this.handleChange } />
          <input
            type="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            <button
              type="button"
              onClick={ () => emailInputed(email) }
              disabled={ disabled }
            >
              Entrar
            </button>
          </Link>
        </label>
      </form>
    );
  }
}
// mapStateToprops -> Leitura dos dados
// mapDispatchtoProps -> escrever os dados

const mapDispatchToProps = (dispatch) => ({
  emailInputed: (email) => dispatch(saveUserInfo(email)),
});

export default connect(null, mapDispatchToProps)(Login);
