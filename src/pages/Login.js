import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUseremail as setUseremailAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disablEmail: false,
      disabPassword: false,
    };
    this.handlerChengeEmail = this.handlerChengeEmail.bind(this);
    this.handlerChengePassword = this.handlerChengePassword.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
  }
  // ref:https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/

  handlerChengeEmail(event) {
    const validEmail = /\S+@\S+\.\S+/;
    const disablEmail = validEmail.test(event.target.value);
    this.setState({
      email: event.target.value,
      disablEmail,

    });
  }

  handlerChengePassword(event) {
    const lengthWord = 6;
    const disabPassword = event.target.value.length >= lengthWord;

    this.setState({
      password: event.target.value,
      disabPassword,
    });
  }

  submitEmail() {
    const { setUseremail } = this.props;
    const { email } = this.state;
    setUseremail(email);
  }

  render() {
    const { email, password, disabPassword, disablEmail } = this.state;

    return (
      <div>
        <h1>Fazer o Login</h1>
        <form className=".forms">
          <fieldset className="fieldset">
            <label htmlFor="email">
              Digite o Email:
              <input
                type="email"
                data-testid="email-input"
                name="email"
                id="email"
                value={ email }
                onChange={ this.handlerChengeEmail }
              />
            </label>
            <label htmlFor="senha">
              Digite a Senha:
              <input
                type="password"
                data-testid="password-input"
                name="password"
                id="senha"
                minLength="6"
                value={ password }
                onChange={ this.handlerChengePassword }
              />
            </label>
            <Link to="/carteira">
              <button
                type="submit"
                onClick={ this.submitEmail }
                disabled={ (!disabPassword || !disablEmail) }
              >
                Entrar
              </button>
            </Link>
          </fieldset>

        </form>
      </div>
    );
  }
}

Login.propTypes = {
  setUseremail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispath) => ({
  setUseremail: (payload) => dispath(setUseremailAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
