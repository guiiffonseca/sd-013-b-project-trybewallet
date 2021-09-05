import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userUpdateLoginInfo } from '../../actions';
import InputField from '../../components/InputField';
import SocialLogin from './SocialLogin';

class LoginRightContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      button: true,
    };

    this.handleChanges = this.handleChanges.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChanges({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });

    this.loginValidatation();
  }

  loginValidatation() {
    const { email, password } = this.state;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    const PASSWORD = 5;
    const validationButton = validEmail.test(email) && password.length >= PASSWORD;
    // console.log(validationButton);
    this.setState({
      button: !validationButton,
    });
  }

  handleButton() {
    const { updateUser } = this.props;
    const { email, password } = this.state;
    updateUser({
      email,
      password,
    });
  }

  returnDisabledButton() {
    const { button } = this.state;
    return (
      <Link to="/carteira">
        <button
          className="disabled-button"
          type="button"
          disabled={ button }
          onClick={ this.handleButton }
        >
          Entrar
        </button>
      </Link>
    );
  }

  // returnEnabledButton() {
  //   return (
  //     <div>
  //       <Link to="/carteira">
  //         <button
  //           className="login-button"
  //           onClick={ this.handleButton }
  //           type="button"
  //         >
  //           Entrar
  //         </button>
  //       </Link>
  //     </div>
  //   );
  // }

  render() {
    // const { button } = this.state;
    return (
      <div className="right-container">
        <div className="form-container">
          <div className="login-register-buttons">
            <span>LOGIN</span>
            <span>CADASTRO</span>
          </div>
          <SocialLogin />
          <form>
            <InputField
              setclass="login-input"
              testid="email-input"
              onchange={ this.handleChanges }
              placeholder="Seu email"
              name="email"
              type="email"
            />
            <InputField
              setclass="login-input"
              testid="password-input"
              onchange={ this.handleChanges }
              placeholder="Senha"
              name="password"
              type="password"
            />
            {/* {button ? this.returnEnabledButton() : this.returnDisabledButton()} */}

            {this.returnDisabledButton()}
          </form>
        </div>
      </div>
    );
  }
}

LoginRightContainer.propTypes = {
  updateUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateUser: (payload) => dispatch(userUpdateLoginInfo(payload)),
});

export default connect(null, mapDispatchToProps)(LoginRightContainer);

/*
Pattern de verificação do email:
https://stackoverflow.com/questions/5601647/html5-email-input-pattern-attribute
*/
